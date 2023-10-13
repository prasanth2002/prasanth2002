const modulefile = require('../model/model')

exports.create = (req, res) => {
    
    let data = new modulefile({
        username: req.body.username,
        mail: req.body.mail,
        number: req.body.number,
        bloodgroup: req.body.bloodgroup

    })
    data.save().then((ww) => {
        console.log(ww)
        res.redirect("/thankyou")
    })
}


