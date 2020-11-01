import mongoose from 'mongoose'

const promotionSchema = mongoose.Schema({
    url:String,
})

export default mongoose.model('promotioncontent', promotionSchema)