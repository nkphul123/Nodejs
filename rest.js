import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/ecomm1");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});
const Product = mongoose.model('products', productSchema);

app.post("/products", async (req, res) => {
  try {
    const result = await Product.insertOne(req.body);
    res.json(result)
  } catch (err) {
    res.json("Error");
  }
});

app.get("/products", async (req, res) => {
  try {
    const result = await Product.find();
    res.json(result);
  } catch (err) {
    res.status("Error");
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const result = await Product.updateOne({_id: req.params.id},{$set: req.body});
    res.json(result);
  } catch (err) {
    res.status("Error");
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const result = await Product.deleteOne({_id: req.params.id});
    res.json(result);
  } catch (err) {
    res.status("Error");
  }
});

app.listen(3000);