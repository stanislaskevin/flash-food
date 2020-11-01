import mongoose from 'mongoose'

const ticketSchema = mongoose.Schema({
    category: String,
    offre: String,
})

export default mongoose.model('ticketscontent', ticketSchema)