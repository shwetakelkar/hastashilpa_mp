const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderTitle: { 
        type: String, 
        unique: true, 
        required: true },

    createdDate: { 
        type: Date, 
        default: Date.now },

    userId:{
        type: String
        
    },
    fileId:{
        type:String,
    },
    orderInfo:{
        type:String
    }
});



module.exports = mongoose.model('Order', orderSchema);