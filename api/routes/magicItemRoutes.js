'use strict';
module.exports = function (app) {
    var magicItemList = require('../controllers/magicItemController');

    // todoList Routes
    app.route('/items')
        .get(magicItemList.list_all_items)
        .post(magicItemList.create_an_item);


    app.route('/items/:itemId')
        .get(magicItemList.read_an_item)
        .put(magicItemList.update_an_item)
        .delete(magicItemList.delete_an_item);
};