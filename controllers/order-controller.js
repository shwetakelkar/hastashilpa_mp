const db = require("../models");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
    
    createOrder: function(req, res) {
        db.Order
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        },
     sendEmail: function(req,res){
        console.log("inside email")
        sgMail.send(req.body).then(() => {
          res.send("success!")
        })
        .catch((err) => {
          console.error(err);
          res.send("An error occured");
        });;
     }   
}