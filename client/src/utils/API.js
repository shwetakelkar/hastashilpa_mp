import axios from "axios";

export default {

    postTestData:function(formData){
        return axios.post("/api/new",formData,{headers: {Accept: 'application/json','Content-Type':'multipart/form-data'}})
    },

    getImages:function(){
        return axios.get("/api/new")
    },

    getLatestItems: function(){
        return axios.get("/api/item");
    },

    getEvent:function(){
        return axios.get("/api/events");
    },

    getItem:function(id){

        return axios.get("/api/item/" + id);

    },
    getAllItems:function(name){

        return axios.get("/api/item/search/"+name);

    },
    saveItem: function(itemData){
        return axios.post("/api/item", itemData);
    },
    saveOrder: function(orderDetails){
        return axios.post("/api/order", orderDetails);
    },
    saveEvent: function(EventData){
        
        return axios.post("/api/events", EventData);
    },
    removeOrder: function(id){
        return axios.delete("/api/order/"+ id);
    },
    getOrders: function(id){
        return axios.get("api/order/"+id)
    },
    deleteItem: function(id){
        return axios.delete("/api/item/"+ id);
    },
    getSellerOrder:function(email){
        return axios.get("/api/order/all/sellerOrders/"+email);
    },
    sendEmail:function(msg){
        return axios.post("/api/order/email",msg)
    },
    getItemsByEmail: function(email){
        return axios.get("/api/item/email/"+email)
    },
    getItemsByAssocEmail: function(email){
        return axios.get("/api/item/assoEmail/"+email)
    },
    
    removeImage:function(id){
        return axios.delete("/api/new/image/"+id)
    },
    
}