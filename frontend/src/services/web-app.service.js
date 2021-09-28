
import { storageService } from "./async-storage.service"
import { utilService } from "./util.service";
const KEY = 'webApps'

export const webAppService = {
    query,
    save,
    getById,
    remove
}



function query(filterBy) {
    return storageService.query(KEY)
}

function save(webApp) {
    webApp.id = utilService.makeId()

    if (webApp.id) {
        return storageService.put(KEY, webApp)
    } else {
        return storageService.post(KEY, webApp)
    }
}

function getById(webAppId) {
    return storageService.get(KEY, webAppId)
}

function remove(webAppId) {
    return storageService.remove(KEY, webAppId)
}