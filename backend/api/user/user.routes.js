const express = require('express')
const { getUser, updateUser } = require('./user.controller')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const router = express.Router()



router.get('/:id', requireAuth, getUser)
router.put('/:id', updateUser)



module.exports = router
