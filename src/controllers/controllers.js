import mongoose from "mongoose";
import {ProductSchema} from "../models/models";

let Product;
mongoose.model(Product, ProductSchema);
export const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if (err) {
            throw new Error('save error')
        } else {
            res.json(Product);
        }
    })
}
export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if (err) {
            throw new Error('error in getProducts');
        }
        res.json(Product);
    })
}

export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if (err) {
            throw new Error('error in getProductWithID');
        }
        res.json(Product);
    })
}

export const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
        if (err) {
            throw new Error('error in updateProduct');
        }
        res.json(Product);
    })
}

export const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {
        if (err) {
            throw new Error('error in deleteProduct');
        }
        res.json({ message: 'successfully deleted product' });
    })
}

