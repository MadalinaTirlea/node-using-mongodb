import mongoose from "mongoose";
import {ProductSchema} from "../models/models";

let Product;
mongoose.model(Product, ProductSchema);
export const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if(err){
            throw new Error('save error')
        } else {
            res.json(Product);
        }
    })

    export const getProducts = (req, res) => {
        Product.find({}, (err, Product) => {
            if(err) {
                throw new Error('error in getProducts');
            }
            res.json(Product);
        })
    }

    export const getProductWithID = (req, res) => {
        Product.findById(req.params.ProductID, (err, Product) => {
            if(err) {
                throw new Error('error in getProductWithID');
            }
            res.json(Product);
        })
    }
}
