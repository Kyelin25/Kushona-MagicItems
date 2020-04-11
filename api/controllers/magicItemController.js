'use strict';


var mongoose = require('mongoose'),
    MagicItem = mongoose.model('MagicItems');

exports.list_all_items = function (req, res) {
    MagicItem.find({}, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.create_an_item = function (req, res) {
    var new_item = new MagicItem(req.body);
    new_item.save(function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.read_an_item = function (req, res) {
    MagicItem.findById(req.params.itemId, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.update_an_item = function (req, res) {
    MagicItem.findOneAndUpdate({ _id: req.params.itemId }, req.body, { new: true }, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};


exports.delete_an_item = function (req, res) {
    MagicItem.remove({
        _id: req.params.itemId
    }, function (err, item) {
        if (err)
            res.send(err);
        res.json({ message: 'Magic item successfully deleted' });
    });
};