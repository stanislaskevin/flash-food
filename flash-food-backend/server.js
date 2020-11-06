import express from 'express'
import mongoose from 'mongoose'

import userData from './userData.js'
import User from './dbUser.js'
import Ticket from './dbTicket.js'
import Promotion from './dbPromotion.js'
import Product from './dbProduct.js'

// App Config
const app = express()
const port = process.env.PORT || 9000

// Middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Header', '*'),
    next()
})
// DB Config
const connection_url = 'mongodb+srv://admin:SSHp9mP20BpnRI5Y@cluster0.4jyvj.mongodb.net/flashfoodDB?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

// API Endpoint
    app.get('/', (req, res) => res.status(200).send('Hello Stan_codes'))

    app.get('/v1', (req, res) => res.status(200).send(userData))

    // User
    app.get('/v1/users', (req, res) => {
        User.find({}, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    })

    app.post('/v2/user', (req, res) => {
        const dbUser = req.body

        User.create(dbUser, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })
    })

    // Ticket
    app.get('/v1/tickets', (req, res) => {
        Ticket.find({}, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    })

    app.post('/v2/ticket', (req, res) => {
        const dbTicket = req.body

        Ticket.create( dbTicket, (err, data) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })
    })

    // Promotions
    app.get('/v1/promotions', (req, res) => {
        Promotion.find({}, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    })

    app.post('/v2/promotion', (req, res) => {
        const dbPromotion = req.body

        Promotion.create(dbPromotion, (err, data) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })
    })

    // Essentials
    app.get('/v1/products', (req, res) => {
        Product.find({}, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    })

    app.get('/v3/product/:_id', (req, res) => {
        Product.findById(req.params._id, (err, data) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    })

    app.post('/v2/product', (req, res) => {
        const dbProduct = req.body

        Product.create(dbProduct, (err, data) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })
    })

// Listen
app.listen(port, () => console.log(`localhost listen on: ${port}`))