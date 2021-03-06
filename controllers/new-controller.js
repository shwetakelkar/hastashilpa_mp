const crypto = require("crypto");
const multer = require("multer");
//var upload = multer({ dest: 'uploads/' })
const GridFsStorage = require("multer-gridfs-storage");
const Item = require("../models/Item.js");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/hs-marketplace";


const conn = mongoose.createConnection(MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true }) 
let gfs;
conn.once("open", () => {
  // init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
  console.log("Connection Successful");
});

const storage = new GridFsStorage({
    url: MONGODB_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: "uploads"
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({
    storage
  }).single("myImage");


  module.exports = {

  create: function(req,res){
   
    upload(req,res,function(err) {
      if(err) {
          return  res.json({error_code:1,err_desc:err});
          
      }
      
      Item
        .create({email:req.body.email,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        address:req.body.address,
        fileID:req.file.id,
        assoEmail:req.body.assoEmail,
        summary:req.body.summary},(err,dbModel)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("success")
        }
    })
      res.end("File is uploaded");
    });
    
  
    },

    findImage: function(req, res){
        

        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {

          
          // Check if file
          if (!file || file.length === 0) {
            return res.status(404).json({
              err: "No file exists"
            });
          }
      
          // Check if image
          if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
          } else {
            res.status(404).json({
              err: "Not an image"
            });
          }
        });
      },

      findAllImages: function(req, res){

        gfs.files.find().limit(10).sort({$natural:-1}).toArray((err, result) => {
          // Check if file
          if (!result || result.length === 0) {
            return res.status(404).json({
              err: "No file exists"
            });
          }
          else {
            result.map(file => {
              if (
                file.contentType === 'image/jpeg' ||
                file.contentType === 'image/png'
              ) {
                file.isImage = true;
              } else {
                file.isImage = false;
              }
            })
            
            res.json(result);
        }
    });
  
  },
  findImagebyId: function(req, res){
    var id = new mongoose.Types.ObjectId(req.params.id);
    
    gfs.files.findOne({_id:id},(err,file) => {
      
      
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: "No file exists"
        });
      }
  
      // Check if image
      if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      } else {
        res.status(404).json({
          err: "Not an image"
        });
      }
    });
  },
  removeFile:function(req,res){

    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
  
      res.send('success!');
    });
  },
  findCategory:function(req,res){

    Item.find({category:req.params.category},{fileID:1, _id:0},(err,result) =>{

      if(err){
        console.log(err)
      }
      else{
        
        var ids = result.map(elem=>elem.fileID)  
            
        gfs.files.find({ _id:{$in:ids}}).toArray(function(err,doc) {
          // Check if file
          if(err){
            console.log(err)
          }
          else{
            if (!doc || doc.length === 0) {
              return res.status(404).json({
                err: "No file exists"
              });
            }
            else {
              doc.map(file => {
                if (
                  file.contentType === 'image/jpeg' ||
                  file.contentType === 'image/png'
                ) {
                  file.isImage = true;
                } else {
                  file.isImage = false;
                }
              })
              res.json(doc);
            }
          }
        }); 
   
      }

    });

    

},

}