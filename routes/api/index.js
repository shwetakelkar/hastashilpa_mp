const router = require("express").Router();
const userRoutes = require("./user");
const eventRoutes = require("./events");
const itemRoutes = require("./item");
const newRoutes = require("./new")
const orderRoutes= require("./order")

router.use("/user", userRoutes);
router.use("/item", itemRoutes);
router.use("/events", eventRoutes);
router.use("/new", newRoutes);
router.use("/order", orderRoutes);

module.exports = router;