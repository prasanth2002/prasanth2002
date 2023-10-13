const express = require ('express');
const route = express.Router();

const controllerfile = require ('../controller/controller')
const renderfile = require ('../service/render');


route.get ('/',renderfile.index) 

route.get ('/form',renderfile.form)

route.get('/thankyou',renderfile.thankyou);

route.post ('/api/users',controllerfile.create)


module.exports = route;

