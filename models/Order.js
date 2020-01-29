const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    orderTitle: { type: String, required: true },
    userId:{ type: String },
    sellerEmail:{ type:String },
    fileId:{ type:String },
    orderInfo:{ type:String },
    buyerEmail:{ type:String },
    createdDate: { type: Date, default: Date.now },
    itemId:{ type:String },
});

module.exports = mongoose.model('Order', orderSchema);