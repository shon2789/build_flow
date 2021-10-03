
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


async function query() {
  try {
    const webApps = await httpService.get(`/api/webApp`)
    return webApps

  } catch (err) {
    console.log(err);
  }
}

async function save(webApp) {
  if (webApp._id) {
    return await httpService.put(`/api/webApp/`, webApp)
  } else {
    return await httpService.post(`/api/webApp`, webApp)
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
