const router = require("express").Router();
const itemController = require("../../controllers/item-controller");

router.route("/")
.get(itemController.findLatestAll)
.post(itemController.create)

router.route("/:id")
.get(itemController.findById)

module.exports = router;