const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId


async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ '_id': ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}

async function update(user) {
    try {
        // peek only updatable fields!
        const userToSave = {
            _id: ObjectId(user._id),
            username: user.username,
            fullName: user.fullName,
            webApps: user.webApps
        }
        const collection = await dbService.getCollection('user')
        await collection.updateOne({ '_id': userToSave._id }, { $set: userToSave })
        return userToSave;
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}

async function add(user) {
    try {
        const userToAdd = {
            username: user.username,
            password: user.password,
            fullName: user.fullname,
            webApps: []
        }
        const collection = await dbService.getCollection('user')

        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('cannot insert user', err)
        throw err
    }
}

async function getByUsername(username) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username: username })
        return user
    } catch (err) {
        logger.error(`while finding user ${username}`, err)
        throw err
    }
}

module.exports = {
    getById,
    update,
    add,
    getByUsername
}