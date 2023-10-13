const mongoose = require('mongoose')
let formfield = new mongoose.Schema ({

    username: {
        type:String,
        require:true
    },
    number: {
        type:Number,
        require:true
    },
    mail: {
        type:String,
        require:true
    },
    bloodgroup : {
        type:String,
        require:true
    }
})
const exportingformfields = mongoose.model('blooddoners',formfield);

module.exports= exportingformfields;
