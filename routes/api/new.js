const router = require("express").Router();
const newController = require("../../controllers/new-controller");


router.route('/')
.post(newController.create)
.get(newController.findAllImages)

console.log("##route1##")  
router.route("/:filename").get(newController.findImage)
//router.route("/file/:id").get(newController.findImage)
router.route("/file/:id").get(newController.findImagebyId)

module.exports = router;