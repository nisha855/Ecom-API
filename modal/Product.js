const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        default: 1
    }
},
    { timestamps: true }
);


//to register this schema
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
