const webAppService = require("./webApp.service")
const logger = require("../../services/logger.service")

async function getWebApps(req, res) {
    try {
        const webApps = await webAppService.query(req.query)
        res.send(webApps)
    } catch (err) {
        logger.error('Failed to get webApps')
        res.status(500).send({ err: 'Failed to get webApps' })
    }
}


async function getWebAppById(req, res) {
    try {
        const webApp = await webAppService.getById(req.params.webAppId)

        res.send(webApp)
    } catch (err) {
        logger.error('Failed to get webApp')
        res.status(500).send({ err: 'Failed to get webApp' })
    }
}

async function updateWebApp(req, res) {
    try {
        const webApp = await webAppService.update(req.query)
        res.send(webApp)
    } catch (err) {
        logger.error('Failed to update webApp')
        res.status(500).send({ err: 'Failed to update webApp' })
    }
}

async function addWebApp(req, res) {
    try {
        const webApp = await webAppService.add(req.query)
        res.send(webApp)
    } catch (err) {
        logger.error('Failed to add webApp')
        res.status(500).send({ err: 'Failed to add webApp' })
    }
}

module.exports = {
    addWebApp,
    updateWebApp,
    getWebAppById,
    getWebApps

}