const Event = require('../models/Event.js');

module.exports = {
    
    //create event
        create: function(req, res) {
       
        Event
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        },

        //find all events to display
        findAllEvents: function(req, res) {

        console.log("inside event")
        
        Event
            .find({"date":{"$gte":new Date()}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },    
}