const webAppService = require("./webApp.service")
const userService = require("../user/user.service")
const logger = require("../../services/logger.service")
const ObjectId = require('mongodb').ObjectId


async function getWebApps(req, res) {
    try {
        const webApps = await webAppService.query()
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
        const webApp = await webAppService.update(req.body)
        const user = req.session.user
        if(user){
            const minifiedWebApp = {
                _id: webApp._id,
                title: webApp.title,
                isPublished: webApp.isPublished,
                image: webApp.image
            }
            const idx = user.webApps.findIndex(miniWebApp => miniWebApp._id === webApp._id)
            user.webApps.splice(idx, 1, minifiedWebApp)
            userService.update(user)
        }
        res.send(webApp)
    } catch (err) {
        logger.error('Failed to update webApp')
        res.status(500).send({ err: 'Failed to update webApp' })
    }
}

async function addWebApp(req, res) {
    try {
        const webApp = await webAppService.add(req.body.webApp)
        if (!req.body.isGuest) {
            const user = req.session.user
            const minifiedWebApp = {
                _id: ObjectId(webApp._id),
                title: webApp.title,
                isPublished: webApp.isPublished,
                image: webApp.image
            }
            user.webApps.push(minifiedWebApp)
            userService.update(user)
        }
        res.send(webApp)
    } catch (err) {
        logger.error('Failed to add webApp')
        res.status(500).send({ err: 'Failed to add webApp' })
    }
}


async function deleteWebApp(req, res) {
    try {

        await webAppService.remove(req.params.webAppId)

        const user = req.session.user
        const idx = user.webApps.findIndex(webApp => webApp._id === req.params.webAppId)
        user.webApps.splice(idx, 1)

        userService.update(user)


        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete review', err)
        res.status(500).send({ err: 'Failed to delete review' })
    }
}



module.exports = {
    addWebApp,
    updateWebApp,
    getWebAppById,
    getWebApps,
    deleteWebApp

}