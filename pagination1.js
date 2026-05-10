import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/ecomm1")

const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pagination1.html"));
});

app.get("/products", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 2;
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Product.countDocuments();

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      data: products
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));