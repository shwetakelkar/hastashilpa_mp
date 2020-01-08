const Item = require("../models/Item.js");

module.exports = {

    //create new product (seller)
    create: function(req, res) {
        Item
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        },
        //update given product by id(seller)
        update: function(req, res) {
            Item
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        //delete given product by id(seller)
        remove: function(req, res) {
            Item
            .remove({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
  
         //find all products limit by 6 (latest) 
        findLatestAll: function(req, res) {
            Item
              .find(req.query,{limit:(6)}
              ,{sort:{$natural:-1}})
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          },
           //find all products by Id
          findById: function(req, res) {
            Item
              .findOne({fileID:req.params.id})
              .then(dbModel => {
                res.json(dbModel)})
              .catch(err => res.status(422).json(err));
          },

           //find all products by search 
          findBySearchName: function(req,res){
            
            Item
              .find({"title" : {'$regex': new RegExp(req.params.name, "i")}})
              .then(data=>
                {res.json(data)})
              .catch(err => res.status(422).json(err))
          },
           //find all products by email
          findByEmail:function(req,res){

            Item
              .find({email:req.params.email})
              .then(data=>{
                res.json(data)
              })
              .catch(err => res.status(422).json(err))
              
          },
           //find all product of given logged in user
          findByAssocEmail:function(req,res){
            
            Item
              .find({assoEmail:req.params.email})
              .then(data=>{
                res.json(data)
              })
              .catch(err => res.status(422).json(err))
              
          }
}