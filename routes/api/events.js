const router = require("express").Router();
const eventController = require("../../controllers/event-controller");

router.route('/')
.get(eventController.findAllEvents)
.post(eventController.create)



module.exports = router;