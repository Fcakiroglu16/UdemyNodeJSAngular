const Book = require("../models/book.model");
const response = require("../response");
const {
    validationResult
} = require("express-validator");
const multer = require("multer");
var path = require("path");
let bookFileName = null;

var mystorage = multer.diskStorage({
    destination: function (req, file, cb) {

        //  const error= file.mimetype=="image/jpeg" ? null : new Error("yanlış uzantı");

        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {

        bookFileName = Date.now() + path.extname(file.originalname);

        cb(null, bookFileName);

    }

})
exports.upload = multer({
    storage: mystorage
});

exports.list = (req, res) => {

    Book.find({}).sort({
        created: -1
    }).populate("categoryBy").exec((err, books) => {

        if (err) {
            return new response(null, err).error500(res);
        }

        return new response(books, null).success(res);

    })

}
// Get http://localhost/api/book/2394823084
exports.getById = (req, res) => {

    Book.findById(req.params.book_id).populate("categoryBy").exec((err, book) => {

        if (err) {
            return new response(null, err).error500(res);
        }

        if (book) {
            return new response(book, null).success(res);
        } else {
            return new response().notFound(res);
        }

    })

}
exports.listByCategoryId = (req, res) => {

    let _id = req.params.category_id;

    Book.find({
        categoryBy: _id
    }).populate("categoryBy").exec((err, books) => {

        if (err) {
            return new response(null, err).error500(res);
        }
        return new response(books, null).success(res);

    })

}

exports.create = (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return new response(null, errors.array()).error400(res);
    }
    const {
        title,
        author,
        price,
        stock,
        picture,
        categoryBy
    } = req.body;
    console.log(picture);
    let book = new Book()
    book.title = title;
    book.author = author;
    book.price = price;
    book.stock = stock;
    book.picture = picture;
    book.categoryBy = categoryBy._id

    book.save((err) => {

        if (err) {
            return new response(null, err).error500(res);
        }

        return new response(book, null).created(res);

    })

}
// PUT http://localhost/api/book/23848923840
exports.update = (req, res) => {

    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return new response(null, errors.array()).error400(res);
    }

    Book.findById(req.params.book_id, (err, book) => {

        if (err) {
            return new response(null, err).error500(res);
        }
        if (!book) {
            return new response().notFound(res);
        }

        const {
            title,
            author,
            price,
            stock,
            picture,
            categoryBy
        } = req.body;

        book.title = title;
        book.author = author;
        book.price = price;
        book.stock = stock;
        book.picture = picture;
        book.categoryBy = categoryBy._id;

        book.save((err) => {
            if (err) {
                return new response(null, err).error500(res);
            }

            return new response(book, null).success(res);

        })

    })

}

exports.delete = (req, res) => {

    let _id = req.params.book_id;

    Book.findOneAndDelete({
        _id: _id
    }, (err, book) => {

        if (err) {
            return new response(null, err).error500(res);
        }
        if (!book) {
            return new response().notFound(res);
        }

        return new response(book, null).success(res);

    })

}

exports.saveImage = (req, res) => {
    try {

        res.status(200).json({
            status: true,
            url: `http://localhost:${process.env.port}/${bookFileName}`
        })
    } catch (err) {
        res.status(500).send(err);
    }

}