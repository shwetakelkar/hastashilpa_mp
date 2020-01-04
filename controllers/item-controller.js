const Item = require("../models/Item.js");

module.exports = {

    create: function(req, res) {
        Item
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        },
        update: function(req, res) {
            Item
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        remove: function(req, res) {
            Item
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        findLatestAll: function(req, res) {
            Item
              .find(req.query,{limit:(6)}
              ,{sort:{$natural:-1}})
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          },
          findById: function(req, res) {
            Item
              .findOne({fileID:req.params.id})
              .then(dbModel => {
                res.json(dbModel)})
              .catch(err => res.status(422).json(err));
          },
          findBySearchName: function(req,res){
            
            Item
              .find({"title" : {'$regex': new RegExp(req.params.name, "i")}})
              .then(data=>
                {res.json(data)})
              .catch(err => res.status(422).json(err))
          }
}