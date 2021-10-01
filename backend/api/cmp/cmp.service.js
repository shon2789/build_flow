const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('cmp')
        const cmps = await collection.find().toArray()
        return cmps[0].cmps
    } catch (err) {
        logger.error('cannot find cmp', err)
        throw err
    }
}

module.exports = {
    query
}