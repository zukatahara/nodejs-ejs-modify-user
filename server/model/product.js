const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: String,
        price: Number,
        img: String,
        quantity: Number,
    }
)

const Product = mongoose.model('product', schema);
module.exports = Product;