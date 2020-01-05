let router = require("express").Router();
let categoryController = require("./controllers/categoryController");

//http://localhost/api/category
router.route("/category").get(categoryController.list).post(categoryController.create);
//PUT http://localhost/api/category/234324234
router.route("/category/:category_id").put(categoryController.update).delete(categoryController.delete)


module.exports = router;