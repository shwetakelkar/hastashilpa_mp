const router = require("express").Router();
const itemController = require("../../controllers/item-controller");

console.log("route")
router.route("/")
.get(itemController.findLatestAll)
.post(itemController.create)

router.route("/:id")
.get(itemController.findById)

router.route("/search/:name")
.get(itemController.findBySearchName)

module.exports = router;