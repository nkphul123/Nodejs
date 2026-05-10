const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ecomm1")

const productSchema = new mongoose.Schema({
        modelnum:Number,
		name:String,
		price:Number
	});

const Product = mongoose.model('products', productSchema)

// let data = new Product({modelnum:3, name:"Laptop", price:78000})
// data.save()
// .then(doc => {
// 	console.log(doc)
// })
// .catch(err => {
// 	console.error(err)
// })


// Product.find({})
// .then(doc => {
// 	console.log(doc)
// })
// .catch(err => {
// 	console.error(err)
// })


// Product.find({modelnum:1})
// .then(doc => {
// 	console.log(doc)
//   })
//   .catch(err => {
// 	console.error(err)
// })


// Product.findByIdAndUpdate("6614260d803cc1adec305d3f",{price: 5000},{new: true})
// .then(doc => {
// 	console.log(doc)
//   })
//   .catch(err => {
// 	console.error(err)
// })


// Product.findByIdAndDelete("6614264ad34c6a50c2ad49c0") 
// .then(response => {
// 	console.log(response)
//   })
//   .catch(err => {
// 	console.error(err)
// })
