import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    avatar: String,
    username: String,
    levelMember: String,
    flashPoint: String,
})

export default mongoose.model('usercontent', userSchema)