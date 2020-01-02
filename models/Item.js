const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({

    title: {
         type: String, 
         unique: true, 
         required: true },
    
    address: { 
        type: String, 
        required: true },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    createdDate: { 
        type: Date, 
        default: Date.now },
    
    fileID: {
        type: Schema.Types.ObjectId,
      }
    
});

var Item =  mongoose.model('Item', itemSchema);

module.exports = Item
