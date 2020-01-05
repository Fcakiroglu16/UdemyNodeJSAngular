Category = require("../models/category.model");

response = require("../response");

exports.list = (req, res) => {

    Category.find({}, (err, categories) => {
        if (err) {
            return new response(null, err).error500(res);
        }

        return new response(categories, null).success(res);




    })



}