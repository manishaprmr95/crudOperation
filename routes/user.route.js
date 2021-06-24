const express = require('express')
const router = express.Router();
const userController = require('../controllers/user.controller')

router.post('/addUser',userController.add_user);
router.get('/getUser',userController.findAll);
router.get('/getOneUser/:id',userController.getOneUser)
router.put('/updateUser/:id',userController.update_user);
router.delete('/deleteUser/:id',userController.deleteUser);

module.exports = router;