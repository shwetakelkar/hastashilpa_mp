const router = require("express").Router();
const orderController = require("../../controllers/order-controller");

router.route("/").post(orderController.createOrder)

router.route("/email").post(orderController.sendEmail)


module.exports = router;