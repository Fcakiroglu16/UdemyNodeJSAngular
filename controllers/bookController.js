Book = require("../models/book.model");
response = require("../response");



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
            new response(book, null).success(res);
        } else {
            new response().notFound(res);
        }







    })





}