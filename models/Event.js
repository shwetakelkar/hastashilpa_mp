const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    title:{ type:String, required:true },
    venue:{ type:String, required:true },
    date:{ type:Date, required:true },
    time:{ type:String },
    description :{ type:String },
    createdDate: { type: Date, default: Date.now }

})
module.exports = mongoose.model('Event', eventSchema);