import { utilService } from './util.service'
import { cloneDeep } from 'lodash';

export const cmpService = {
  getCmps,
  getById,
  deepCloneCmp,
  deleteCmp
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
    "img": "https://i.ibb.co/88SwnXf/footer.jpg",
    "attributes": {
      "className": "rettro-footer",
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",

        "backgroundColor": "#071112",
        "paddingTop": "5rem",

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


            "marginBottom": "5rem",
            "padding": "0 1rem",
            "color": "gray",
            "fontSize": "1.3rem",
            "marginTop": "5rem",
            "fontSize": "0.85rem",
            "textAlign": "center",

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
    "img": "https://i.ibb.co/1MmXdcN/anothersection.png",
    "attributes": {
      "className": "rettro-cards-section",
      "style": {
        "display": "flex",
        "flex-direction": "column",
        "justifyContent": "space-around",
        "alignItems": "center",
        "backgroundColor": "white",
        "minHeight": "50vh",
        "width": "100%"
      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Life is about Creating Experiences",
        },

        "attributes": {
          "className": "",
          "style": {
            "fontFamily": "Lato regular, sans-serif",
            "color": "black",
            "fontSize": "3rem",
            "textAlign": "center",
            "padding": "3rem 1rem"
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        },

        "attributes": {
          "className": "",
          "style": {
            "fontFamily": "system-ui",
            "fontWeight": "200",
            "color": "gray",
            "fontSize": "1.3rem",
            "textAlign": "center",
            "padding": "1rem 1rem",
            "width": "90%"
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": true,

        "attributes": {
          "className": "",
          "style": {
            "display": "flex",
            "flexWrap": "wrap",
            "width": "100%",
            "justifyContent": "space-around",
            "alignItems": "center",
            "padding": "4rem 0"
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,

            "attributes": {
              "className": "",
              "style": {
                "display": "flex",
                "flex": "20rem",
                "width": "50%",
                "justifyContent": "space-around",
                "alignItems": "center",
                "padding": "4rem 0"
              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "section",
                "isDroppable": true,

                "attributes": {
                  "className": "",
                  "style": {
                    "display": "flex",
                    "flexDirection": "column",
                    "justifyContent": "space-around",
                    "alignItems": "center",
                  }
                },
                "children": [
                  {
                    "id": utilService.makeId(),
                    "type": "img",
                    "isDroppable": "false",

                    "attributes": {
                      "className": "",
                      "style": {
                      },
                      "src": "https://preview.colorlib.com/theme/rettro/assets/img/icon/services1.svg"
                    },
                    "children": []
                  },
                  {
                    "id": utilService.makeId(),
                    "type": "txt",
                    "isDroppable": "false",

                    "info": {
                      "txt": "your text here"
                    },
                    "attributes": {
                      "className": "",
                      "style": {
                        "textAlign": "center",
                        "fontFamily": "Lato regular, sans-serif",
                        "fontSize": "1.3rem",
                        "margin-top": "1rem"
                      }
                    },
                    "children": []
                  }
                ]
              },
              {
                "id": utilService.makeId(),
                "type": "section",
                "isDroppable": true,

                "attributes": {
                  "className": "",
                  "style": {
                    "display": "flex",
                    "flexDirection": "column",
                    "justifyContent": "space-around",
                    "alignItems": "center",
                  }
                },
                "children": [
                  {
                    "id": utilService.makeId(),
                    "type": "img",
                    "isDroppable": "false",

                    "attributes": {
                      "className": "",
                      "style": {
                      },
                      "src": "https://preview.colorlib.com/theme/rettro/assets/img/icon/services2.svg"
                    },
                    "children": []
                  },
                  {
                    "id": utilService.makeId(),
                    "type": "txt",
                    "isDroppable": "false",

                    "info": {
                      "txt": "your text here"
                    },
                    "attributes": {
                      "className": "",
                      "style": {
                        "textAlign": "center",
                        "fontFamily": "Lato regular, sans-serif",
                        "fontSize": "1.3rem",
                        "margin-top": "1rem"
                      }
                    },
                    "children": []
                  }
                ]
              },
            ]
          },
          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,

            "attributes": {
              "className": "",
              "style": {
                "display": "flex",
                "flex": "20rem",
                "width": "50%",
                "justifyContent": "space-around",
                "alignItems": "center",
                "padding": "4rem 0"
              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "section",
                "isDroppable": true,

                "attributes": {
                  "className": "",
                  "style": {
                    "display": "flex",
                    "flexDirection": "column",
                    "justifyContent": "space-around",
                    "alignItems": "center",
                  }
                },
                "children": [
                  {
                    "id": utilService.makeId(),
                    "type": "img",
                    "isDroppable": "false",

                    "attributes": {
                      "className": "",
                      "style": {

                      },
                      "src": "https://preview.colorlib.com/theme/rettro/assets/img/icon/services3.svg"
                    },
                    "children": []
                  },
                  {
                    "id": utilService.makeId(),
                    "type": "txt",
                    "isDroppable": "false",

                    "info": {
                      "txt": "your text here"
                    },
                    "attributes": {
                      "className": "",
                      "style": {
                        "textAlign": "center",
                        "fontFamily": "Lato regular, sans-serif",
                        "fontSize": "1.3rem",
                        "margin-top": "1rem"
                      }
                    },
                    "children": []
                  }
                ]
              },
              {
                "id": utilService.makeId(),
                "type": "section",
                "isDroppable": true,

                "attributes": {
                  "className": "",
                  "style": {
                    "display": "flex",
                    "flexDirection": "column",
                    "justifyContent": "space-around",
                    "alignItems": "center",
                  }
                },
                "children": [
                  {
                    "id": utilService.makeId(),
                    "type": "img",
                    "isDroppable": "false",

                    "attributes": {
                      "className": "",
                      "style": {
                      },
                      "src": "https://preview.colorlib.com/theme/rettro/assets/img/icon/services4.svg"
                    },
                    "children": []
                  },
                  {
                    "id": utilService.makeId(),
                    "type": "txt",
                    "isDroppable": "false",

                    "info": {
                      "txt": "your text here"
                    },
                    "attributes": {
                      "className": "",
                      "style": {
                        "textAlign": "center",
                        "fontFamily": "Lato regular, sans-serif",
                        "fontSize": "1.3rem",
                        "margin-top": "1rem"
                      }
                    },
                    "children": []
                  }
                ]
              }
            ]
          }

        ]
      }
    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "section",
    "img": "https://i.ibb.co/fvRvR0j/retro-section.png",
    "isDroppable": false,
    "attributes": {
      "className": "retro-section-black-photography",
      "style": {
        "width": "100%",
        "display": "flex",
        "height": "fit-content",
      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": false,
        "attributes": {
          "className": "retro-section-black-photography-left",
          "style": {
            "backgroundColor": "#071112",
            "fontFamily": "Lato regular",
            "display": "flex",
            "color": "#fff",
            "flexDirection": "column",
            "justifyContent": "center",
            "textAlign": "left",
            "padding": "3rem",
            "gap": "4rem",
            "minWidth": "50%",
            "wordWrap": "break-word"
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              "txt": "I'm Ready to Exceed Expectations"
            },
            "attributes": {
              "className": "",
              "style": {
                "fontSize": "2rem"
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              "txt": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cupiditate! Nesciunt nostrum inventore maxime fugit. Odio quisquam autem, maiores rem quos error dignissimos consectetur hic. Iusto maxime optio suscipit fuga?"
            },
            "attributes": {
              "className": "",
              "style": {
                "lineHeight": "1.75",
                "fontsize": "1.4rem",
                "letterSpacing": "1.5px",
                "fontFamily": "Lato light"
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              "txt": "About Me",
              "action": {
                "link": "www.google.com"
              }
            },
            "attributes": {
              "className": "",
              "style": {
                "width": "9rem",
                "height": "2.8rem",
                "background": "none",
                "color": "#fff",
                "borderHeight": "1.5px",
                "borderStyle": "solid",
                "borderColor": "#fff",
                "fontSize": "1rem"
              }
            },
            "children": [

            ]
          }
        ]
      },
      {
        "id": utilService.makeId(),
        "type": "img",
        "isDroppable": false,
        "attributes": {
          "className": "retro-section-black-photography-right",
          "style": {
            "minWidth": "50%",
            "maxHeight": "40rem",
            "objectFit": "cover",
            "Width": "100%",
            "Height": "100%"
          },
          "src": "https://preview.colorlib.com/theme/rettro/assets/img/gallery/startup_bg.png.webp"
        },
        "children": [

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

function getCmps() {
  return getMinifiedCmps()
}

// Deep cloning the cmp, and recursively changing all the id's and inner id's
function deepCloneCmp(cmpId) {
  const cmp = getById(cmpId);
  const coppiedCmp = cloneDeep(cmp);

  _changeCmpIds(coppiedCmp);
  return coppiedCmp;
}

// Recursively going through an cmp and changing the id's
function _changeCmpIds(cmp) {
  cmp.id = utilService.makeId();
  if (cmp.children.length > 0) {
    cmp.children.forEach(child => {
      child.id = utilService.makeId();
      _changeCmpIds(child)
    })
  }
}

function deleteCmp(cmpId, webAppCmps) {
  webAppCmps.forEach((cmp, idx) => {
    if (cmp.id === cmpId) {
      webAppCmps.splice(idx, 1)
      console.log('deleted')
      return
    } else {
      if (cmp.children.length > 0) {
        deleteCmp(cmpId, cmp.children)
      }
    }
  })
}