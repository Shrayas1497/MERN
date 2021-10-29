import mongoose from 'mongoose' ;

const productSchema = new mongoose.Schema({
id:String,
url:String,
detialUrl:String,
title:Object,
price:Object,
description:String,
dicount:String,
tagline:String

})

 const products=mongoose.model('product',productSchema)
export default products;