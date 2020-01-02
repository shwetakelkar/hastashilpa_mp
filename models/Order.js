const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderInfo: { type: String, unique: true, required: true },
    quantity: { 
        type: Number, 
        required: true },

    createdDate: { 
        type: Date, 
        default: Date.now },

    User:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    Item:{
        type: Schema.Types.ObjectId,
        ref:"Item"
    }
});



module.exports = mongoose.model('Order', orderSchema);