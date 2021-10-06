const express = require('express')
const { requireWebAppAuth, requireDeleteAuth } = require('../../middlewares/requireAuth.middleware')
const { getWebApps, getWebAppById, updateWebApp, addWebApp, deleteWebApp } = require('./webApp.controller')

const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getWebApps)
router.get('/:webAppId', requireWebAppAuth, getWebAppById)
router.put('/', updateWebApp)
router.post('/', addWebApp)

router.delete('/:webAppId', requireDeleteAuth, deleteWebApp)

module.exports = router