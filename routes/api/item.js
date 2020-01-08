const router = require("express").Router();
const itemController = require("../../controllers/item-controller");


router.route("/")
.get(itemController.findLatestAll)
.post(itemController.create)

router.route("/:id")
.get(itemController.findById)

router.route("/search/:name")
.get(itemController.findBySearchName)

router.route("/email/:email")
.get(itemController.findByEmail)

router.route("/assoEmail/:email")
.get(itemController.findByAssocEmail)



router.route("/:id")
.delete(itemController.remove)

module.exports = router;