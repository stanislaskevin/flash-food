import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    title:String,
    description:String,
    pricez:String,
    url:String,
})

export default mongoose.model('productcontent', productSchema)