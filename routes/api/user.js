const router = require("express").Router();
const userController = require("../../controllers/user-controller");
const verifyToken = require('../../serverAuth.js').verifyToken

router.route('/')
.get(userController.index)
.post(userController.create)

router.post('/authenticate', userController.authenticate)


router.use(verifyToken)
router.route('/:id')
.get(userController.show)
.patch(userController.updateUser)
.delete(userController.destroy)

router.route('/email/:id')
.put(userController.updateAssocEmail)

module.exports = router;
