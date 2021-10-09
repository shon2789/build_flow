
import { httpService } from "./http.service";


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

async function save(webApp, isGuest = false) {
  if (webApp._id) {
    return await httpService.put(`/api/webApp/`, webApp)
  } else {
    return await httpService.post(`/api/webApp`, { webApp, isGuest })
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

async function remove(webAppId) {
  try {
    await httpService.delete(`/api/webApp/${webAppId}`)
  } catch (err) {
    console.log(err);
  }
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
