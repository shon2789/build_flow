const dbService = require('../../services/db.service')
const userService = require('../user/user.service')
const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')


// Returns only the template webApps
async function query() {
    try {
        const collection = await dbService.getCollection('webApp')
        const webApps = await collection.find({ isTemplate: true }).toArray()
        return webApps
    } catch (err) {
        logger.error('cannot find webApp', err)
        throw err
    }
}

async function add(webApp) {
    try {
        const collection = await dbService.getCollection('webApp')
        await collection.insertOne(webApp)
        return webApp
    } catch (err) {
        logger.error(`failed to add webApp ${webApp}`, err)
        throw err
    }

}

async function update(webApp) {
    try {
        const _id = webApp._id
        const id = ObjectId(webApp._id)
        delete webApp._id
        const collection = await dbService.getCollection('webApp')
        await collection.updateOne({ "_id": id }, { $set: { ...webApp } })
        webApp._id = _id;
        return webApp
    } catch (err) {
        logger.error(`cannot update webApp ${webApp}`, err)
        throw err
    }
}

async function getById(webAppId) {
    try {
        const collection = await dbService.getCollection('webApp')
        const webApp = collection.findOne({ '_id': ObjectId(webAppId) })
        return webApp
    } catch (err) {
        logger.error(`while finding webApp ${webAppId}`, err)
        throw err
    }
}

async function remove(webAppId) {
    try {
        const collection = await dbService.getCollection('webApp')
        const criteria = { _id: ObjectId(webAppId) }
        await collection.deleteOne(criteria)

    } catch (err) {
        logger.error(`cannot remove review ${webAppId}`, err)
        throw err
    }
}






module.exports = {
    query,
    getById,
    add,
    update,
    remove
}