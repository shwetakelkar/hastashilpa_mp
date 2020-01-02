import axios from "axios";

export default {

    postTestData:function(formData){
        return axios.post("/api/new",formData,{headers: {Accept: 'application/json','Content-Type':'multipart/form-data'}})
    },

    getImages:function(){
        return axios.get("/api/new")
    },

    getLatestItems: function (title){
        return axios.get("/api/item");
    },

    getEvent:function(){
        return axios.get("/api/events");
    },

    getItem:function(id){

        return axios.get("/api/item/" + id);

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
    deleteItem: function(id){
        return axios.delete("/api/items/"+ id);
    },
    sendEmail:function(msg){
        return axios.post("/api/order/email",msg)
    }
}