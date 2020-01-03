const Order = require("../models/Order.js");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
    
    createOrder: function(req, res) {
      console.log("checkhere")
      console.log(req.body)
       Order.create(req.body).then(dbModel => res.json(dbModel))
       .catch(err => { console.log(err);res.status(422).json(err)}); 
          
          
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