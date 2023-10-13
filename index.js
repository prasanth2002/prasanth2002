const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyparser = require('body-parser')
mongoose.connect ('mongodb+srv://prasanth:20@database1.spxe3wy.mongodb.net/blooddonation',{}) .then ((name) =>{
console.log("mongodb connected")
} )
app.set('view engine','ejs')
app.use (express.static('public'))
app.use(bodyparser.urlencoded({extended:true}));

app.use ('/',require('./server/route/route'))
app.use ('/thankyou',require('./server/route/route'))

app.listen('3000')