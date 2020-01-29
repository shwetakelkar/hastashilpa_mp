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

router.route("/best/:id")
.put(itemController.updateItemAsBS)

router.route("/review/:id")
.put(itemController.updateItemReview)

router.route("/:id")
.delete(itemController.remove)

router.route("/bestSellers/test")
.get(itemController.findAllBestSellers)

module.exports = router;