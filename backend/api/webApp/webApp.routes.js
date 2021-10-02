const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getWebApps, getWebAppById, updateWebApp, addWebApp } = require('./webApp.controller')

const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getWebApps)
router.get('/:webAppId', requireAuth, getWebAppById)
router.put('/', updateWebApp)
router.post('/', addWebApp)

// router.delete('/:id', requireAuth, deleteWebApp)

module.exports = router