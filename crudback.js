import express from 'express';
const app = express()
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const Product = mongoose.model("products", productSchema);
mongoose.connect("mongodb://localhost:27017/ecomm1");

app.use(express.urlencoded({extended:true}))
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'crudfront.html'));
})

// CREATE
app.post("/add", async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();

    res.send(`
        <h2>Product Added Successfully</h2>
        <p> ${result.name}</p>
        <p> ${result.price}</p>
        <a href="/">Go Back</a>
    `);
});

// READ
app.get("/read", async (req, res) => {
    let data = await Product.find();
    let table = `
        <h2>All products</h2>
        <table border="1">
            <tr><th>Name</th><th>Price</th><th>ID</th></tr>
    `;

    data.forEach(item => {
        table += `<tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item._id}</td>
        </tr>`;
    });

    table += `</table><br><a href="/">Go Back</a>`;
    res.send(table)

    // res.send(data);
});

// UPDATE
app.post("/update", async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.body.id },
        { $set: { name: req.body.name, price: req.body.price } }
    );

    res.send(`
        <h2>Product Updated</h2>
        <p>Matched: ${result.matchedCount}</p>
        <p>Modified: ${result.modifiedCount}</p>
        <br><a href="/">Go Back</a>
    `);
});

// DELETE
app.post("/delete", async (req, res) => {
    let result = await Product.deleteOne({ _id: req.body.id });
    res.send(`
        <h2>Product Deleted</h2>
        <p>Deleted Count: ${result.deletedCount}</p>
        <br><a href="/">Go Back</a>
    `);
});

app.listen(3000, () => console.log("Server running on 3000"));
