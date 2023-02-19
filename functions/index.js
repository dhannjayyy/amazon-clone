const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")('sk_test_51MW30cSCubCFnNg7tK85Bl8bVEcaTCj4AbBermlVNW90jbOIFcEbWuWNMqHSomX2G5ji09baibO7GXj7Ts543JPY00LdpbsCan')

// - API

// - App config
const app = express();
 
// - Middlewars
app.use(cors({origin:true}));
app.use(express.json());   
 
// - API routes
app.get('/',(request,response)=>response.status(200).send("Hello world"))

app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"inr",
    })

    //OK - Created (status code)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
 
// - Listen command
exports.api = functions.https.onRequest(app)

