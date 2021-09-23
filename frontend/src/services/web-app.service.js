import { utilService } from "./util.service";

export const webAppService = {
    getCmps
}

const gCmps = [
    { id: utilService.makeId(), content: <div>Hi</div> },
    { id: utilService.makeId(), content: <div>Bye</div> },
    { id: utilService.makeId(), content: <div>Jonathan</div> },
    { id: utilService.makeId(), content: <div>Raz</div> },
    { id: utilService.makeId(), content: <div>Shon</div> },
    { id: utilService.makeId(), content: <div>Have</div> },
    { id: utilService.makeId(), content: <div>Kaki</div> },
    { id: utilService.makeId(), content: <div>Dahuf</div> },
    { id: utilService.makeId(), content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> }
];

function getCmps() {
    return gCmps
}