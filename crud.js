import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/ecomm1")
// mongoose.connect(
//   "mongodb://navneet:123@ac-gcdwdoh-shard-00-00.x4vqfxi.mongodb.net:27017,ac-gcdwdoh-shard-00-01.x4vqfxi.mongodb.net:27017,ac-gcdwdoh-shard-00-02.x4vqfxi.mongodb.net:27017/ecomm1?ssl=true&replicaSet=atlas-mtmbmr-shard-0&authSource=admin&appName=myAtlasClusterEDU"
// );

const productSchema = new mongoose.Schema({
		name:String,
		price:Number
	});
const Product = mongoose.model('products', productSchema)
const saveInDB = async()=>{
	// const result = await Product({name:"smartphone", price:20000}).save();
	const result = await Product.insertOne({name:"smartphone", price:20000})
	console.log(result);
}

const updateInDB = async()=>{
	let data = await Product.updateOne(
		{name:"max 100"}, {$set:{price:700}})
		console.log(data);
}

const deleteInDB = async()=>{
	let data = await Product.deleteOne({name:"max 100"});
	console.log(data);
}

const findInDB = async()=>{
	let data = await Product.find();
	console.log(data);
}
saveInDB();