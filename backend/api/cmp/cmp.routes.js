const express = require('express')
const { getCmps } = require('./cmp.controller')

const router = express.Router()

router.get('/', getCmps)

module.exports = router