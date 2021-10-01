
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




// loadItemsToStorgae()
// function loadItemsToStorgae() {
//   const templatesFromStorage = JSON.parse(localStorage.getItem('template')) || localStorage.setItem("template", JSON.stringify(templates));
// }


async function query(filterBy) {
  // return storageService.query(KEY)
  try {
    const webApps = await httpService.get(`/api/webApp`)
    return webApps

  } catch (err) {
    console.log(err);
  }
}

function save(webApp) {

  if (webApp.id) {
    return storageService.put(KEY, webApp)
  } else {
    return storageService.post(KEY, webApp)
  }
}

async function getById(webAppId) {
  // return storageService.get(KEY, webAppId)
  console.log(webAppId);

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
