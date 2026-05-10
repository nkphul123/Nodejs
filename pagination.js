// import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/ecomm1");

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// });

// const saveInDB = async () => {
//     const Product = mongoose.model('products', productSchema);

//     const products = [
//         { name: "phone", price: 10000 },
//         { name: "laptop", price: 50000 },
//         { name: "tablet", price: 20000 },
//         { name: "watch", price: 5000 },
//         { name: "camera", price: 30000 },
//         { name: "speaker", price: 4000 }
//     ];

//     for (let item of products) {
//         let data = new Product(item);
//         await data.save();
//     }

//     console.log("Multiple data inserted");
// };

// saveInDB();


import express from "express";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/ecomm1");
const app = express();
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const Product = mongoose.model('products', productSchema);
// API with pagination
app.get("/products", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 2;
    const data = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit);
    res.send(data);
});
app.listen(3000);

//Now how to run, paste http://localhost:3000/products?page=1 or http://localhost:3000/products?page=2 in browser