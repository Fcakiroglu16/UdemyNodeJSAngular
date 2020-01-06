const router = require("express").Router();
const categoryController = require("./controllers/categoryController");
const bookController = require("./controllers/bookController")

const {
    check
} = require("express-validator");

//http://localhost/api/category
router.route("/category").get(categoryController.list).post([check("name").notEmpty().withMessage("name alanı boş olamaz")], categoryController.create);
//PUT http://localhost/api/category/234324234
router.route("/category/:category_id").put([check("name").notEmpty().withMessage("name alanı boş olamaz")], categoryController.update).delete(categoryController.delete).get(categoryController.getById);

var bookValidation = new Array(
    check("title").notEmpty().withMessage("title alanı boş olamaz"),
    check("author").notEmpty().withMessage("author alanı boş olamaz"),
    check("price").notEmpty().withMessage("price alanı boş olamaz").isFloat().withMessage("price değeri float olmalı"),
    check("stock").notEmpty().withMessage("stock alanı boş olamaz").isInt().withMessage("stock alanı integer değer olmalı"),
    check("picture").notEmpty().withMessage("picture alanı boş olmamalı"),
    check("categoryBy").notEmpty().withMessage("categoryBy alanı boş olamaz"));







router.route("/book").get(bookController.list).post([bookValidation], bookController.create);
router.route("/book/:book_id").get(bookController.getById).put([bookValidation], bookController.update).delete(bookController.delete);

router.route("/books/:category_id").get(bookController.listByCategoryId);

module.exports = router;