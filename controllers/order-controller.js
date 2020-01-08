const Order = require("../models/Order.js");
const sgMail = require('@sendgrid/mail');
var mailApiKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(mailApiKey);

module.exports = {

  //create order 
    createOrder: function(req, res) {
      
      console.log("create order")
       Order.create(req.body).then(dbModel => res.json(dbModel))
       .catch(err => { console.log(err);res.status(422).json(err)});  
    },
    //to send email 
    sendEmail: function(req,res){
      console.log("inside email")
      sgMail.send(req.body).then(() => {
        res.send("success!")
      })
      .catch((err) => {
        console.error(err);
        res.send("An error occured");
      });;
    }, 
    //find all orders of given user(buyer)
    findAllOrders:function(req,res){
      Order.find({userId:req.params.id}).then(data=>{
        console.log("success!")
        res.send(data)
      }).catch((err)=>
      console.log(err))

    },

     //find all orders by email(seller)
    findAllSellerOrders:function(req,res){
      
      Order.find({sellerEmail:req.params.email}).then(data=>{
        console.log("success!")
        res.send(data)
      }).catch((err)=>
      console.log(err))

    },


}