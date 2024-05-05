const sql = require('../db');

var Category = function(category) {
    this.category_name = category.category_name;
    this.category_description = category.category_description;
}

Category.create = (newCategory, result) => {
    sql.query("INSERT INTO category SET ?", newCategory, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created category: ", { id: res.insertId, ...newCategory });
        result(null, { id: res.insertId, ...newCategory });
    });
}