const router = require("express").Router();
const orderController = require("../../controllers/order-controller");


router.route("/")
.post(orderController.createOrder)

router.route("/:id")
.get(orderController.findAllOrders)

router.route("/email")
.post(orderController.sendEmail)


router.route("/all/sellerOrders/:email")
.get(orderController.findAllSellerOrders)


module.exports = router;