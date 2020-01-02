const db = require('../models/Event.js');

module.exports = {
    
    create: function(req, res) {
       
        db.Event
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        },

    findAllEvents: function(req, res) {
        
        db.Event
            .find({"date":{"$gte":new Date()}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },    
}