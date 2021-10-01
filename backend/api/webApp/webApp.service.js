const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('webApp')
        const webApps = await collection.find().toArray()
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
        const id = ObjectId(webApp._id)
        delete webApp._id
        const collection = await dbService.getCollection('webApp')
        await collection.updateOne({ "_id": id }, { $set: { ...webApp } })
        return webApp
    } catch (err) {
        logger.error(`cannot update webApp ${webApp}`, err)
        throw err
    }
}

async function getById(webAppId) {

    console.log(webAppId, 'webAppId');
    try {
        const collection = await dbService.getCollection('webApp')
        const webApp = collection.findOne({ '_id': ObjectId(webAppId) })
        return webApp
    } catch (err) {
        logger.error(`while finding webApp ${webAppId}`, err)
        throw err
    }
}

module.exports = {
    query,
    getById,
    add,
    update
}