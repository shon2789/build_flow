import { utilService } from './util.service'
import { cloneDeep } from 'lodash';
import { storageService } from './async-storage.service';
import { httpService } from './http.service';

export const cmpService = {
  getCmps,
  getById,
  deepCloneCmp,
  deleteCmp,
  changeCmpIds,
  getParentElement,
  updateCmp,
  query,
  getMinifiedCmps
}


async function query() {
  try {
    const cmps = await httpService.get("/api/cmp")
    return cmps
  } catch (err) {
    console.log(err);
  }
}

function getMinifiedCmps(cmps) {
  return cmps.map(cmp => {
    return {
      id: cmp.id,
      type: cmp.type,
      sectionType: cmp.sectionType,
      content: <img alt="accordion-section-img" width="100%" src={cmp.img} />
    }
  })
}

async function getById(cmpId) {
  return await storageService.get("cmp", cmpId)

}

function getCmps() {
  return getMinifiedCmps()
}

// Deep cloning the cmp, and recursively changing all the id's and inner id's
function deepCloneCmp(cmp) {
  const coppiedCmp = cloneDeep(cmp);

  changeCmpIds(coppiedCmp);
  return coppiedCmp;
}

// Recursively going through an cmp and changing the id's
function changeCmpIds(cmp) {
  cmp.id = utilService.makeId();
  if (cmp.children.length > 0) {
    cmp.children.forEach(child => {
      child.id = utilService.makeId();
      changeCmpIds(child)
    })
  }
}

// Recursively going through an cmp and deleting an element by its id.
function deleteCmp(cmpId, webAppCmps) {
  webAppCmps.forEach((cmp, idx) => {
    if (cmp.id === cmpId) {
      webAppCmps.splice(idx, 1)
    } else {
      if (cmp.children.length > 0) {
        deleteCmp(cmpId, cmp.children)
      }
    }
  })
}

// Recursively going through an cmp and targeting element's parent, and pushing to his children the duplicated cmp
function getParentElement(element, mappedWebAppCmps, webAppCmps) {
  mappedWebAppCmps.forEach((cmp, idx) => {
    //Case duplicating an entire section (Part of the webApp array):
    //(element?.sectionType) means if no sectionType got to else if
    if (cmp.id === element.id && element?.sectionType) {
      const duplicatedElement = cloneDeep(element)
      changeCmpIds(duplicatedElement)
      //webAppCmps is the parent of the section
      webAppCmps.splice(idx + 1, 0, { id: utilService.makeId(), cmp: duplicatedElement })
      //Case duplicating any other type of an element:
    } else if (cmp.id === element.id) {
      const duplicatedElement = cloneDeep(element)
      changeCmpIds(duplicatedElement)
      //mappedWebAppCmps is a parent of an element
      mappedWebAppCmps.splice(idx + 1, 0, duplicatedElement)
    }
    //Case element has children:
    if (cmp.children.length > 0) {
      cmp.children.forEach((child, idx) => {
        //Case the child is the one being duplicated:
        if (child.id === element.id) {
          const duplicatedElement = cloneDeep(element)
          changeCmpIds(duplicatedElement)
          //Cmp is the parent of the child
          cmp.children.splice(idx + 1, 0, duplicatedElement)
          return
        } else {
          //Recursively calling the function again on it's children:
          if (child.children.length > 0) {
            getParentElement(element, child.children, webAppCmps)
          }
        }
      })
    }
  })
}

function updateCmp(currCmp, webAppCmps, propPath) {
  
  webAppCmps.forEach(cmp => {
    if (cmp.id === currCmp.id) {
      if (propPath === 'style' || propPath === 'style-mobile' || propPath === 'style-tablet') {
        cmp.attributes[propPath] = currCmp.attributes[propPath]
      } else if (propPath === 'info') {
        cmp[propPath] = currCmp[propPath]
      } else if (propPath === 'attributes'){
        cmp[propPath] = currCmp[propPath]
      }
      return
    } else {
      if (cmp.children.length > 0) {
        updateCmp(currCmp, cmp.children, propPath)
      }
    }
  })
}
