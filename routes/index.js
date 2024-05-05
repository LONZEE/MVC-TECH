const category = require('../controllers/category.controller.js');

module.exports = function(app) {

    app.get('/', category.Main);
}