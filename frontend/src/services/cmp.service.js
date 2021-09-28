import { utilService } from './util.service'
import { cloneDeep } from 'lodash';
import { storageService } from './async-storage.service';

export const cmpService = {
  getCmps,
  getById,
  deepCloneCmp,
  deleteCmp,
  changeCmpIds,
  getParentElement,
  updateCmp
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
        "padding": "0 1.875rem",
        "backgroundColor": "white",
        "minHeight": "3.75rem",
        "flexWrap": "wrap"
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
            "fontFamily": "Birthstone regular,sans-serif",
            "marginTop": "12rem",
            "fontSize": "5.6rem",

          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "01 Best gallery"
        },

        "attributes": {
          "className": "photography-txt",
          "style": {
            "marginTop": "4rem",
            "fontSize": "2.6rem",
            "fontFamily": "Birthstone regular,sans-serif",
            "letterSpacing": "0.45rem",
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
            "gap": "2rem",
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
    "sectionType": "card",
    "isDroppable": true,
    "img": "https://i.ibb.co/1MmXdcN/anothersection.png",
    "attributes": {
      "className": "rettro-cards-section",
      "style": {
        "display": "flex",
        "flexDirection": "column",
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
                        "marginTop": "1rem"
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
                        "marginTop": "1rem"
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
                        "marginTop": "1rem"
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
                        "marginTop": "1rem"
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
        "minHeight": "30rem",
        "backgroundColor": "#071112"

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
                "letterSpacing": "0.09375rem",
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
                "borderHeight": "0.09375rem",
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
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "section",
    "isDroppable": true,
    "img": "https://i.ibb.co/vmxjSq5/icecream.png",
    "attributes": {
      "className": "portfolio-main-section",
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "minHeight": "75vh",
        "backgroundImage": "url('https://www.moevenpick-icecream.com/sites/default/files/styles/product_background/public/2021-03/FL-15315BwithoutLOGO_2.jpg?itok=ED_FBX18')",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "width": "100%",

      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Discover",

        },



        "attributes": {
          "className": "portfolio-main-txt",
          "style": {


            "fontSize": "4.3rem",
            "textShadow": "0.1875rem 0.25rem 0.4375rem rgba(81,67,21,0.8)",
            "marginBottom": "1.3rem",
            "marginTop": "7rem",
            "textAlign": "center",
            "color": "white",
            "fontFamily": "Birthstone regular,sans-serif",

          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Yummy yummy Icecreams",

        },



        "attributes": {
          "className": "portfolio-main-txt",
          "style": {


            "fontSize": "5rem",
            "marginBottom": "5rem",
            "textAlign": "center",
            "color": "white",
            "fontFamily": "Birthstone regular,sans-serif",
            "textShadow": "0.1875rem 0.25rem 0.4375rem rgba(81,67,21,0.8)"

          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "btn",
        "isDroppable": false,
        "info": {
          "txt": "Discover more",

        },



        "attributes": {
          "className": "portfolio-main-txt",
          "style": {


            "fontSize": "1.4rem",
            "border": "none",

            "textAlign": "center",
            "color": "#292929",
            "fontFamily": "Roboto regular,sans-serif",
            "backgroundColor": "white",
            "padding": "0.7rem",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "minWidth": "13rem",
            "boxShadow": "rgba(0, 0, 0, 0.35) 0rem 0.3125rem 0.9375rem"

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
    "img": "https://i.ibb.co/L9hNS84/dvfdxcfvdsvds.png",
    "attributes": {
      "className": "ice-cream-footer",
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "min-height": "60px",
        "backgroundColor": "#292929",
        "width": "100%",

      }
    },
    "children": [



      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "@All rights reserved | Yummy",

        },



        "attributes": {
          "className": "icecream-footer-txt",
          "style": {


            "fontSize": "1.5rem",
            "textAlign": "center",
            "color": "white",
            "fontFamily": "Birthstone regular,sans-serif",


          }
        },
        "children": []
      },

    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "card",
    "isDroppable": true,
    "img": "https://i.ibb.co/8sTvCp2/card.png",
    "attributes": {
      "className": "web-app-form1",
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "min-height": "35rem",
        "backgroundColor": "white",
        "width": "100%",

      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": false,
        "attributes": {
          "className": "web-app-form-container",
          "style": {
            "backgroundColor": "#B8E6E1",
            "maxWidth": "60rem",
            "fontFamily": "Lato regular,sans-serif",
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "column",
            "padding": "5rem 3rem",
            "borderRadius": "14px",
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              "txt": "Get started with 14 days trial"
            },
            "attributes": {
              "className": "web-app-form-txt",
              "style": {
                "color": "#292929",
                "marginBottom": "2rem",
                "textAlign": "center",
                "fontSize": "2.5rem",
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              "txt": "If you want to take your cooking skills up another notch then it might be time to look at changing to a gas stove."
            },
            "attributes": {
              "className": "web-app-form-txt",
              "style": {
                "fontSize": "1.4rem",
                "color": "gray",
                "marginBottom": "2rem",
                "textAlign": "center",
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,
            "attributes": {
              "className": "web-app-form-signup",
              "style": {
                "color": "gray",
                "display": "flex",
                "alignItems": "center",
                "flexWrap": "wrap",
                "gap": "1.2rem"
              }
            },
            "children": [


              {
                "id": utilService.makeId(),
                "type": "btn",
                "isDroppable": true,
                "info": {
                  "txt": "Download Free Trial"
                },

                "attributes": {
                  "className": "web-app-form-btn",
                  "style": {
                    "backgroundColor": "#292929",
                    "min-width": "12rem",
                    "padding": "1rem",
                    "color": "white",
                    "fontSize": "1.5rem",
                    "marginTop": "1.5rem",
                    "border": "none",




                  }
                },
                "children": []
              },

            ]
          },

        ]
      },

    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "header",
    "isDroppable": true,
    "img": "https://i.ibb.co/zG1FVTd/pinkheader.png",
    "attributes": {
      "className": "ice-cream-navbar",
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "minHeight": "60px",
        "backgroundColor": "white",
        "width": "100%",
        "flexWrap": "wrap",
        "gap": "25px",


      }
    },
    "children": [



      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Yummy in my tummy",

        },



        "attributes": {
          "className": "icecream-header-txt",
          "style": {


            "fontSize": "2.5rem",
            "textAlign": "center",
            "color": "#292929",
            "fontFamily": "Birthstone regular,sans-serif",


          }
        },
        "children": []
      },


    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "img",
    "isDroppable": true,
    "img": "https://i.ibb.co/QMbDGXn/wowow.png",
    "attributes": {
      "className": "web-app-img1",
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "flexDirection": "column",
        "alignItems": "center",
        "min-height": "35rem",
        "backgroundColor": "#292929",
        "width": "100%",
        "padding": "3rem",

      }

    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Meet our team"
        },
        "attributes": {
          "className": "web-app-img-txt",
          "style": {
            "color": "white",
            "fontFamily": "Lato regular,sans-serif",
            "textAlign": "center",
            "fontSize": "2.3rem",
            "marginBottom": "3rem",


          }
        },
        "children": [
        ]
      },


      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": true,

        "attributes": {
          "className": "web-app-img-imgs-container",
          "style": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "gap": "20px",
            "flexWrap": "wrap",



          }
        },
        "children": [



          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,

            "attributes": {
              "className": "web-app-img-imgs-inner-container-left",
              "style": {
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center",
                "flexWrap": "wrap",
                "gap": "20px",



              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,


                "attributes": {
                  "src": "https://a-cloud.b-cdn.net/media/iW=263&iH=any/d03-Img-Guy-Beanie.jpg",
                  "className": "web-app-imgs-img",
                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,


                "attributes": {
                  "className": "web-app-imgs-img",
                  "src": "https://a-cloud.b-cdn.net/media/iW=263&iH=any/d03-Img-Guy-Shirt.jpg",
                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
            ]
          },

          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,

            "attributes": {
              "className": "web-app-img-imgs-inner-container-left",
              "style": {
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center",
                "gap": "20px",
                "flexWrap": "wrap",



              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,

                "attributes": {
                  "className": "web-app-imgs-img",
                  "src": "https://a-cloud.b-cdn.net/media/iW=263&iH=any/d03-Img-Girl-Blonde-Curly.jpg",
                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,

                "attributes": {
                  "className": "web-app-imgs-img",
                  "src": "https://a-cloud.b-cdn.net/media/iW=264&iH=any/d03-Img-Girl-Locks.jpg",

                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
            ]
          },
        ]
      },

    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "section",
    "isDroppable": true,
    "img": "https://i.ibb.co/YRxsL99/xzcxccccccd.png",
    "attributes": {
      "className": "beauty-main-section",
      "style": {
        "display": "flex",
        "flexWrap": 'wrap',
        "justifyContent": "center",
        "alignItems": 'center',
        "backgroundColor": '#f9e2e2',
        "paddingRight": '2rem',
        "paddingLeft": '2rem',
        "gap": '2rem'
      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": true,
        "attributes": {
          "className": "beauty-main-inner-section",
          "style": {
            "fontFamily": 'Lato',
            "display": "flex",
            "flexDirection": 'column',
            "justifyContent": "center",
            "height": "20rem"
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              'txt': 'Beauty & Skin Care'
            },

            "attributes": {
              "className": "beauty-main-inner-section-txt",
              "style": {
                "paddingBottom": '1rem',
                "fontFamily": 'Lato',
                "fontWeight": '700',
                "fontSize": '4rem',
                "color": '#db6260'
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              'txt': `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.`
            },

            "attributes": {
              "className": "beauty-main-inner-section-txt",
              "style": {
                "paddingTop": '1rem',
                "paddingBottom": '1.5rem',
                "fontFamily": 'Lato',
                "fontSize": '1rem',
                "color": 'black'
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "btn",
            "isDroppable": false,
            "info": {
              'txt': 'See More',
              'action': {
                'link': 'www.google.com'
              }
            },

            "attributes": {
              "className": "beauty-main-inner-section-btn",
              "style": {
                "paddingRight": '3rem',
                "paddingLeft": '3rem',
                "paddingTop": '0.5rem',
                "paddingBottom": '0.5rem',
                "fontFamily": 'Lato',
                "fontSize": '1.2rem',
                "width": 'fit-content',
                "background": "none",
                "borderRadius": "30px",
                "color": "#db6260",
                "borderHeight": "1.5px",
                "borderStyle": "solid",
                "borderColor": "#db6260"
              }
            },
            "children": []
          }
        ]
      },
      {
        "id": utilService.makeId(),
        "type": "img",
        "isDroppable": false,
        "attributes": {
          "className": "beauty-main-section-img",
          "style": {
            "width": '28.125rem',
            "maxWidth": '100%',
          },
          "src": "https://themes.abusayedshuvo.xyz/most_one/skincare/skincare/img/banner-img.png"
        },
        'children': []
      }
    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "header",
    "isDroppable": true,
    "img": "https://i.ibb.co/41RvS0K/xszcxzsccxzxzcxzc.png",
    "attributes": {
      "className": "",
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "padding": "0 1.875rem",
        "backgroundColor": "white",
        "minHeight": "6rem",
        "flexWrap": "wrap",
        "width": "100%",
      }
    },
    "children": [
      {


        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Beauty"
        },

        "attributes": {
          "className": "beauty-logo",
          "style": {
            "fontSize": "3.2rem",
            "fontFamily": "Birthstone regular,sans-serif",
            "color": "#db6260"
          }
        },
        "children": []
      },
      {
        "id": utilService.makeId(),
        "type": "navbar",
        "isDroppable": false,

        "attributes": {
          "className": "web-app-beauty-navbar",
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
              "txt": "Gallery",
              "action": { "link": "www.google.com" }
            },

            "attributes": {
              "className": "web-app-btn",
              "style": {
                "backgroundColor": "transparent",
                "border": "none",
                "color": "#071112",
                "fontSize": "1.4rem",
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
              "txt": "Skin-Care",
              "action": { "link": "www.google.com" }
            },

            "attributes": {
              "className": "web-app-btn",
              "style": {
                "backgroundColor": "transparent",
                "border": "none",
                "color": "#071112",
                "fontSize": "1.4rem",
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
              "txt": "Get in touch",
              "action": { "link": "www.google.com" }
            },

            "attributes": {
              "className": "web-app-btn",
              "style": {
                "backgroundColor": "#db6260",
                "border": "none",
                "color": "white",
                "fontSize": "1.1rem",
                "cursor": "pointer",
                "padding": "0.75rem",
                "borderRadius": "30px",
                "borderColor": "#db6260"
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
    "sectionType": "footer",
    "isDroppable": true,
    "img": "https://i.ibb.co/xm9Y51g/Untssssitled.png",
    "attributes": {
      "className": "beauty-footer",
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "min-height": "17rem",
        "backgroundColor": "#f9e2e2",
        "width": "100%",

      }
    },
    "children": [



      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "©2021 made with love by team BuildFlow",

        },



        "attributes": {
          "className": "beaury-footer-txt",
          "style": {


            "fontSize": "1.04rem",
            "textAlign": "center",
            "color": "#db6260",
            "fontFamily": "Lato regular,sans-serif",

          }
        },
        "children": []
      },

    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "img",
    "isDroppable": true,
    "img": "https://i.ibb.co/9NcndgZ/skiins.png",
    "attributes": {
      "className": "web-app-img1",
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "flexDirection": "column",
        "alignItems": "center",
        "min-height": "35rem",
        "backgroundColor": "white",
        "width": "100%",
        "padding": "3rem",

      }

    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "We love skin care"
        },
        "attributes": {
          "className": "web-app-img-txt",
          "style": {
            "color": "#ababab",
            "fontFamily": "Lato regular,sans-serif",
            "textAlign": "center",
            "fontSize": "1.3rem",
            "marginBottom": "0.6rem",


          }
        },
        "children": [
        ]
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Skin Care Gallery"
        },
        "attributes": {
          "className": "web-app-img-txt",
          "style": {
            "color": "#292929",
            "fontFamily": "Roboto medium,sans-serif",
            "textAlign": "center",
            "fontSize": "2.75rem",
            "marginBottom": "1rem",
          }
        },
        "children": [
        ]
      },
      {
        "id": utilService.makeId(),
        "type": "txt",
        "isDroppable": false,
        "info": {
          "txt": "Skin Care / Face Care / Skin Scars Treatment"
        },
        "attributes": {
          "className": "web-app-img-txt",
          "style": {
            "color": "#292929",
            "fontFamily": "Lato regular,sans-serif",
            "textAlign": "center",
            "fontSize": "1.3rem",
            "marginBottom": "1.4rem",
          }
        },
        "children": [
        ]
      },


      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": true,

        "attributes": {
          "className": "web-app-img-imgs-container",
          "style": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "gap": "20px",
            "flexWrap": "wrap",



          }
        },
        "children": [



          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,

            "attributes": {
              "className": "web-app-img-imgs-inner-container-left",
              "style": {
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center",
                "flexWrap": "wrap",
                "gap": "20px",



              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,


                "attributes": {
                  "src": "https://themes.abusayedshuvo.xyz/most_one/skincare/skincare/img/work-2.jpg",
                  "className": "web-app-imgs-img",
                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,


                "attributes": {
                  "className": "web-app-imgs-img",
                  "src": "https://themes.abusayedshuvo.xyz/most_one/skincare/skincare/img/work-3.jpg",
                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
            ]
          },

          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,

            "attributes": {
              "className": "web-app-img-imgs-inner-container-left",
              "style": {
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center",
                "gap": "20px",
                "flexWrap": "wrap",



              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,

                "attributes": {
                  "className": "web-app-imgs-img",
                  "src": "https://themes.abusayedshuvo.xyz/most_one/skincare/skincare/img/work-7.jpg",
                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,

                "attributes": {
                  "className": "web-app-imgs-img",
                  "src": "https://themes.abusayedshuvo.xyz/most_one/skincare/skincare/img/work-8.jpg",

                  "style": {

                    "width": "15rem",
                    "height": "16rem",
                    "objectFit": "cover",

                  }
                },
                "children": [
                ]
              },
            ]
          },
        ]
      },

    ]
  },
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "section",
    "img": "https://i.ibb.co/pZB2GfN/Untitlecvcxvccccccccccccccd.png",
    "isDroppable": false,
    "attributes": {
      "className": "",
      "style": {
        "backgroundColor": "#db6260",
        "width": "100%",
        "display": "flex",
        "flexWrap": "wrap",
        "height": "fit-content",
        "padding-top": "1rem",
        "padding-bottom": "1rem",
        "padding-left": "1rem",
        "padding-right": "1rem",
      }
    },
    "children": [
      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": false,
        "attributes": {
          "className": "beauty-section-skin-care-img",
          "style": {
            "display": "flex",
            "color": "#fff",
            "justifyContent": "center",
            "alignItems": "center",
            "padding-top": "2rem",
            "padding-bottom": "2rem",
            "padding-left": "2rem",
            "padding-right": "2rem",
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "img",
            "isDroppable": false,
            "attributes": {
              "className": "",
              "style": {
                "objectFit": "bottom",
                "width": "20rem",
                "border": "20px solid #f6f6f6",
                "background": "white"
              },
              "src": "https://themes.abusayedshuvo.xyz/most_one/skincare/skincare/img/treatment.jpg"
            },
            "children": []
          }
        ]
      },
      {
        "id": utilService.makeId(),
        "type": "section",
        "isDroppable": false,
        "attributes": {
          "className": "beauty-section-skin-care-text",
          "style": {
            "display": "flex",
            "flexDirection": "column",
            "padding-top": "2rem",
            "padding-bottom": "2rem",
            "padding-left": "2rem",
            "padding-right": "2rem",
            "gap": "2rem"
          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              "txt": "Skin Care & Treatments"
            },
            "attributes": {
              "className": "",
              "style": {
                "fontSize": "2.5rem"
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              "txt": "Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus."
            },
            "attributes": {
              "className": "",
              "style": {
                "letterSpacing": "1.5px",
                "fontFamily": "Lato light"
              }
            },
            "children": []
          },
          {
            "id": utilService.makeId(),
            "type": "txt",
            "isDroppable": false,
            "info": {
              "txt": "Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend."
            },
            "attributes": {
              "className": "",
              "style": {
                "fontSize": "1rem",
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
              "txt": "Learn More",
              "action": {
                "link": "www.google.com"
              }
            },
            "attributes": {
              "className": "",
              "style": {
                "width": "6.5rem",
                "height": "2.5rem",
                "background": "none",
                "borderRadius": "30px",
                "color": "#fff",
                "borderHeight": "1.5px",
                "borderStyle": "solid",
                "borderColor": "#fff"
              }
            },
            "children": []
          }
        ]
      }
    ]
  }
]

loadItemsToStorgae()
function loadItemsToStorgae() {
  const cmpsFromStorage = JSON.parse(localStorage.getItem('cmp')) || localStorage.setItem("cmp", JSON.stringify(cmps));
}



async function getMinifiedCmps() {

  const cmps = await storageService.query("cmp")
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
async function deepCloneCmp(cmpId) {
  const cmp = await getById(cmpId);
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

function updateCmp(currCmp, webAppCmps, type) {

  webAppCmps.forEach(cmp => {
    if (cmp.id === currCmp.id) {
      if (type === 'style') {
        cmp.attributes.style = currCmp.attributes.style
      } else if (type === 'info') {
        cmp.info = currCmp.info
      }
      return
    } else {
      if (cmp.children.length > 0) {
        updateCmp(currCmp, cmp.children, type)
      }
    }
  })
}