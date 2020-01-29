const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({

    title: { type: String, required: true },
    summary:{type: String},
    bestSeller:{type:Boolean,  default:false},
    address: { type: String, required: true },
    email:{ type:String, required:true },
    description:{ type:String, required:true },
    assoEmail:{ type:String, required:true },
    price:{ type:Number,required:true },
    category:{type:String,required:true},
    createdDate: { type: Date, default: Date.now },
    fileID: { type: Schema.Types.ObjectId },
    rating:{type:Number},
    reviews:{type: Array},
    
});

var Item =  mongoose.model('Item', itemSchema);

module.exports = Item
