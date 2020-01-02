const db = require("../models/Item.js");

module.exports = {

    create: function(req, res) {
        db.Item
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        },
        update: function(req, res) {
            db.Item
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        remove: function(req, res) {
            db.Item
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        findLatestAll: function(req, res) {
            db.Item
              .find(req.query)
              .sort({ date: -1 })
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          },
          findById: function(req, res) {
            db.Item
              .findOne({fileID:req.params.id})
              .then(dbModel => {
                res.json(dbModel)})
              .catch(err => res.status(422).json(err));
          },
}