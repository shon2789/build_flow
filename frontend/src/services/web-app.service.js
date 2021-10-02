
import { storageService } from "./async-storage.service"
import { httpService } from "./http.service";



const KEY = 'template'

export const webAppService = {
  query,
  save,
  getById,
  remove,
  createNewWebApp
}


async function query(filterBy) {
  try {
    const webApps = await httpService.get(`/api/webApp`, filterBy)
    return webApps

  } catch (err) {
    console.log(err);
  }
}

async function save(webApp) {
  if (webApp._id) {
    await httpService.put(`/api/webApp/`, webApp)
    // return storageService.put(KEY, webApp)
  } else {
    await httpService.post(`/api/webApp`, webApp)
    // return storageService.post(KEY, webApp)
  }
}

async function getById(webAppId) {

  try {
    const webApp = await httpService.get(`/api/webApp/${webAppId}`)
    return webApp

  } catch (err) {
    console.log(err);
  }
}

function remove(webAppId) {
  return storageService.remove(KEY, webAppId)
}

function createNewWebApp() {
  return {
    "image": "",
    "title": "new project",
    "isTemplate": false,
    "isPublished": false,
    "children": []
  }
}
