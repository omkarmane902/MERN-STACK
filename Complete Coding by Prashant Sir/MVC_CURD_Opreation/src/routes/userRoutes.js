const express = require('express')

const router = express.Router();

const { getUsers, createUser, updatedUser, deleteUser } = require('../controllers/userController.js');


router.get('/',getUsers);

router.post("/createuser",createUser);

router.put('/:id',updatedUser)

router.delete('/:id',deleteUser)


module.exports = router;