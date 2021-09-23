import { utilService } from './util.service'

export const cmpService = {
    getCmps,
    getById
}

const cmps = [
    {
        "id": "c101",
        "type": "header",
        "isDroppable": true,
        "img": "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",

        "info": {
            title: "hiiiiiiiii",
            shatz: "byeeeee"
        },

        "attributes": {
            "className": "web-app-header",
            "style": {
                "height": "90px",
                "display": "flex",
                "flexWrap": "wrap",
                "alignItems": "center",
                "paddingLeft": "10px",
                "paddingRight": "10px",
                "fontFamily": "Montserrat",
                "fontWeight": "300",
                "color": "blue",
                "gap": "10px",
                "backgroundColor": "white"
            }
        },

        "children": [
            {
                "id": "IsdR32dsfl",
                "type": "header",
                "isDroppable": false,

                "info": {
                    "title": "Cool Website",
                    "subtitle": "hello"
                },

                "attributes": {
                    "className": "web-app-header",
                    "style": {
                        "height": "90px",
                        "display": "flex",
                        "alignItems": "center",
                        "paddingLeft": "10px",
                        "paddingRight": "10px",
                        "fontFamily": "Montserrat",
                        "fontWeight": "300",
                        "color": "blue",
                        "gap": "10px",
                        "backgroundColor": "white"
                    }
                },

                "children": [
                    {
                        "id": "IsdR32dsfl",
                        "type": "header",
                        "isDroppable": false,

                        "info": {
                            "title": "Cool Shmulik",
                            "subtitle": "hello"
                        },

                        "attributes": {
                            "className": "web-app-header",
                            "style": {
                                "height": "90px",
                                "display": "flex",
                                "alignItems": "center",
                                "paddingLeft": "10px",
                                "paddingRight": "10px",
                                "fontFamily": "Montserrat",
                                "fontWeight": "300",
                                "color": "blue",
                                "gap": "10px",
                                "backgroundColor": "white"
                            }
                        },

                        "children": null
                    }
                ]
            }
        ]
    }
]



function getMinifiedCmps() {
    return cmps.map(cmp => {
        return {
            id: cmp.id,
            type: cmp.type,
            content: <img width="100%" src={cmp.img} />
        }
    })
}

function getById(cmpId) {

    return cmps.find(cmp => {
        return cmp.id === cmpId
    })
}

const gWebAppCmps = [
    { id: utilService.makeId(), type: "nav-bar", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "header", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "footer", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "card", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "contact", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "txt", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "img", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "footer", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> },
    { id: utilService.makeId(), type: "header", content: <img width="100%" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="bla" /> }
];

function getCmps() {
    return getMinifiedCmps()
}