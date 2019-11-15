const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    url: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now, //Data atual automaticamente
    }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);