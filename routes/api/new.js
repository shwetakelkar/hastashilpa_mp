const router = require("express").Router();
const newController = require("../../controllers/new-controller");


router.route('/')
.post(newController.create)
.get(newController.findAllImages)

 
router.route("/:filename").get(newController.findImage)
//router.route("/file/:id").get(newController.findImage)

router.route("/file/:id")
.get(newController.findImagebyId)

router.route("/all/:category")
.get(newController.findCategory)

router.route("/image/:id")
.delete(newController.removeFile)

module.exports = router;