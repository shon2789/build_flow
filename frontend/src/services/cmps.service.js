import { utilService } from './util.service'

export const cmpService = {
  getCmps,
  getById
}

utilService.makeId()

const cmps = [
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "header",
    "isDroppable": true,
    "img": "https://i.ibb.co/tMSFKPq/header1.jpg",
    "attributes": {
      "className": "",
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "padding": "0 30px",
        "backgroundColor": "white",
        "height": "60px"
      }
    },
    "children": [
      {


        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Rettro"
        },

        "attributes": {
          "className": "rettro-logo",
          "style": {
            "fontSize": "1.8rem",
            "fontWeight": "bold",
            "color": "#292929"
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "navbar",
        "isDroppable": false,

        "attributes": {
          "className": "web-app-navbar",
          "style": {
            "display": "flex",
            "gap": "1.5rem",
            "width": "fit-content"
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "Home",
              "action": { "link": "www.google.com" }
            },

            "attributes": {
              "className": "web-app-btn",
              "style": {
                "backgroundColor": "transparent",
                "border": "none",
                "color": "#071112",
                "fontSize": "1.15rem",
                "cursor": "pointer"
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "About",
              "action": { "link": "www.google.com" }
            },

            "attributes": {
              "className": "web-app-btn",
              "style": {
                "backgroundColor": "transparent",
                "border": "none",
                "color": "#071112",
                "fontSize": "1.15rem",
                "cursor": "pointer"
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "Portfolio",
              "action": { "link": "www.google.com" }
            },

            "attributes": {
              "className": "web-app-btn",
              "style": {
                "backgroundColor": "transparent",
                "border": "none",
                "color": "#071112",
                "fontSize": "1.15rem",
                "cursor": "pointer"
              }
            },
            "children": []
          }
        ]
      }

    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "navbar",
    "isDroppable": true,
    "img": "https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F432%2F519%2Fsquare_480%2FReact_Dnd_Final.png&w=640&q=100",
    "attributes": {
      "className": "",
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "padding": "0 30px",
        "backgroundColor": "white",
        "height": "60px"
      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "btn",
        "isDroppable": false,
        "info": {
          "txt": "btn3",
          "action": { "link": "www.google.com" }
        },

        "attributes": {
          "className": "web-app-btn",
          "style": {
            "backgroundColor": "royalblue"
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "btn",
        "isDroppable": false,
        "info": {
          "txt": "btn3",
          "action": { "link": "www.google.com" }
        },

        "attributes": {
          "className": "web-app-btn",
          "style": {
            "backgroundColor": "royalblue"
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "btn",
        "isDroppable": false,
        "info": {
          "txt": "btn3",
          "action": { "link": "www.google.com" }
        },

        "attributes": {
          "className": "web-app-btn",
          "style": {
            "backgroundColor": "royalblue"
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "btn",
        "isDroppable": false,
        "info": {
          "txt": "btn3",
          "action": { "link": "www.google.com" }
        },

        "attributes": {
          "className": "web-app-btn",
          "style": {
            "backgroundColor": "royalblue"
          }
        },
        "children": []
      }
    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "section",
    "isDroppable": true,
    "img": "https://i.ibb.co/DQtPm2Z/section1.jpg",
    "attributes": {
      "className": "rettro-main-section",
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "backgroundImage": "url('https://preview.colorlib.com/theme/rettro/assets/img/hero/xh1_hero1.png.pagespeed.ic.iM0zmOGvvG.webp')",
        "backgroundSize": "cover",
        "minHeight": "70vh",
        "color": "white",
        "maxWidth": "100%",

      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Photography"
        },

        "attributes": {
          "className": "rettro-photography-txt",
          "style": {
            "fontFamily": "Lato regular",
            "transform": "translateY(40px)",

          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "01 Travel pro"
        },

        "attributes": {
          "className": "photography-txt",
          "style": {
            "marginTop": "4rem",
            "fontSize": "2rem",
            "fontFamily": "Lato regular",
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "I'm a text, change me!"
        },

        "attributes": {
          "className": "photography-txt",
          "style": {
            "marginTop": "1rem",
            "fontSize": "1.5rem",
            "fontFamily": "Lato regular"
          }
        },
        "children": []
      },

    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "footer",
    "isDroppable": true,
    "img": "https://preview.colorlib.com/theme/rettro/assets/img/hero/xh1_hero1.png.pagespeed.ic.iM0zmOGvvG.webp",
    "attributes": {
      "className": "rettro-footer",
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "paddingTop": "5rem",

        "backgroundColor": "#071112",

        "minHeight": "35vh",
        "color": "white",

      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Rettro"
        },

        "attributes": {
          "className": "rettro-footer-logo",
          "style": {
            "fontFamily": "Lato regular",
            "fontSize": "3rem",
            "marginBottom": "3rem",
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": true,


        "attributes": {
          "className": "rettro-footer-links",
          "style": {

            "fontSize": "1.2rem",
            "fontFamily": "Lato regular",
            "color": "gray",
            "display": "flex",
            "alignItems": "center",
            "gap": "30px",
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "Home",
              "action": {
                "link": "google.com"
              }
            },

            "attributes": {
              "className": "rettro-footer-link",
              "style": {
                "border": "none",
                "backgroundColor": "transparent",
                "cursor": "pointer",
                "color": "gray",
                "fontSize": "1.3rem"

              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "About",
              "action": {
                "link": "google.com"
              }
            },

            "attributes": {
              "className": "rettro-footer-link",
              "style": {
                "border": "none",
                "backgroundColor": "transparent",
                "cursor": "pointer",
                "color": "gray",
                "fontSize": "1.3rem"

              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "Portfolio",
              "action": {
                "link": "google.com"
              }
            },

            "attributes": {
              "className": "rettro-footer-link",
              "style": {
                "border": "none",
                "backgroundColor": "transparent",
                "cursor": "pointer",
                "color": "gray",
                "fontSize": "1.3rem"

              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "Blog",
              "action": {
                "link": "google.com"
              }
            },

            "attributes": {
              "className": "rettro-footer-link",
              "style": {
                "border": "none",
                "backgroundColor": "transparent",
                "cursor": "pointer",
                "color": "gray",
                "fontSize": "1.3rem"

              }
            },
            "children": []
          },
        ]
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "@All rights reserved | This template is made with 🤍 by BuildFlow",

        },

        "attributes": {
          "className": "rettro-rights",
          "style": {



            "color": "gray",
            "fontSize": "1.3rem",
            "marginTop": "5rem",
            "marginBottom": "4rem",
            "fontSize": "0.85rem",
            "textAlign": "center",

          }
        },
        "children": []
      }


    ]
  }

]



function getMinifiedCmps() {
  return cmps.map(cmp => {
    return {
      id: cmp.id,
      type: cmp.type,
      sectionType: cmp.sectionType,
      content: <img alt="accordion-section-img" width="100%" src={cmp.img} />
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