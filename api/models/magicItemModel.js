'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MagicItemSchema = new Schema(
    {
        name: {
            type: String,
            required: "Every magic item needs a name"
        },
        description: {
            type: String,
            required: "Every magic item needs a description"
        },
        flavour: {
            type: String,
            default: ""
        }
    }
);

module.exports = mongoose.model('MagicItems', MagicItemSchema);