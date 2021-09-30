
import { filter } from "lodash";
import { storageService } from "./async-storage.service"
import { utilService } from "./util.service";
const KEY = 'template'

export const webAppService = {
  query,
  save,
  getById,
  remove
}

const templates = [
  {
    "id": utilService.makeId(),
    "image": "https://i.ibb.co/NCrnCTQ/Rettro.jpg",
    "title": "Rettro",
    "isTemplate": true,
    "children": [
      {
        "id": utilService.makeId(),
        "type": "section",
        "sectionType": "header",
        "isDroppable": true,
        "img": "https://i.ibb.co/tMSFKPq/header1.jpg",
        "attributes": {
          "className": "",
          "style-mobile": {
          },
          "style-tablet": {
          },
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
              "style-mobile": {
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
                  "style-mobile": {
                  },
                  "style-tablet": {
                  },
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
                  "style-mobile": {
                  },
                  "style-tablet": {
                  },
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
                  "style-mobile": {
                  },
                  "style-tablet": {
                  },
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
          "style-mobile": {
            "minHeight": "30rem",
          },
          "style-tablet": {
          },
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
              "style-mobile": {
                "fontSize": "5.6rem",
                "textAlign": "center",
                "paddingLeft": "0",
                "paddingTop": "0",
              },
              "style-tablet": {
                "fontSize": "7.3rem",
                "textAlign": "center",
                "paddingLeft": "0",
                "paddingTop": "0",
              },
              "style": {
                "fontFamily": "Birthstone regular,sans-serif",
                "paddingTop": "12rem",
                "paddingBottom": "0",
                "paddingLeft": "10rem",
                "paddingRight": "0",
                "fontSize": "7.3rem",

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
              "style-mobile": {
                "paddingLeft": "0",
                "paddingTop": "0",
                "textAlign": "center",
              },
              "style-tablet": {
                "paddingLeft": "0",
                "paddingTop": "0",
                "textAlign": "center",
              },
              "style": {
                "paddingTop": "4rem",
                "paddingBottom": "0",
                "paddingLeft": "10rem",
                "paddingright": "0",
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
        "sectionType": "section",
        "img": "https://i.ibb.co/fvRvR0j/retro-section.png",
        "isDroppable": false,
        "attributes": {
          "className": "retro-section-black-photography",
          "style-mobile": {
            "flexDirection": "column"
          },
          "style-tablet": {
          },
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
              "style-mobile": {
                "paddingTop": "1.5rem",
                "paddingBottom": "1.5rem",
                "paddingLeft": "1.5rem",
                "paddingRight": "1.5rem",
                "gap": "2.5rem"
              },
              "style-tablet": {
                "paddingTop": "2rem",
                "paddingBottom": "2rem",
                "paddingLeft": "2rem",
                "paddingRight": "2rem",
                "gap": "3rem"
              },
              "style": {
                "backgroundColor": "#071112",
                "fontFamily": "Lato regular",
                "display": "flex",
                "color": "#fff",
                "flexDirection": "column",
                "justifyContent": "center",
                "textAlign": "left",
                "paddingTop": "3rem",
                "paddingBottom": "3rem",
                "paddingLeft": "3rem",
                "paddingRight": "3rem",
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
                  "style-mobile": {
                    "fontSize": "2rem",
                    "textAlign": "center"
                  },
                  "style-tablet": {
                    "fontSize": "2rem",
                  },
                  "style": {
                    "fontSize": "3rem"
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
                  "style-mobile": {
                    "lineHeight": "1.2",
                    "fontSize": "1rem",
                  },
                  "style-tablet": {
                    "fontSize": "1rem",
                    "lineHeight": "1.5",
                  },
                  "style": {
                    "lineHeight": "1.75",
                    "fontSize": "1.2rem",
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
                  "style-mobile": {
                    "fontSize": "1rem",
                    "alignSelf": "center"
                  },
                  "style-tablet": {
                    "fontSize": "1.2rem"
                  },
                  "style": {
                    "width": "fit-content",
                    "height": "fit-content",
                    "background": "none",
                    "paddingTop": "0.5rem",
                    "paddingBottom": "0.5rem",
                    "paddingLeft": "2rem",
                    "paddingRight": "2rem",
                    "color": "#fff",
                    "borderHeight": "0.09375rem",
                    "borderStyle": "solid",
                    "borderColor": "#fff",
                    "fontSize": "1.4rem"
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
              "style-mobile": {},
              "style-tablet": {},
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
        "sectionType": "card",
        "isDroppable": true,
        "img": "https://i.ibb.co/1MmXdcN/anothersection.png",
        "attributes": {
          "className": "rettro-cards-section",
          "style-mobile": {},
          "style-tablet": {},
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
              "style-mobile": {},
              "style-tablet": {},
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
              "style-mobile": {},
              "style-tablet": {},
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
              "style-mobile": {
                "flexDirection": "column",
                "paddingTop": "0.5rem",
                "paddingBottom": "0.5rem",
              },
              "style-tablet": {
                "flexDirection": "column"
              },
              "style": {
                "display": "flex",
                "flexDirection": "row",
                "width": "100%",
                "justifyContent": "space-around",
                "alignItems": "center",
                "paddingTop": "4rem",
                "paddingBottom": "4rem",
              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "section",
                "isDroppable": true,

                "attributes": {
                  "className": "",
                  "style-mobile": {
                    "gap": "1rem",
                    "width": "100%",
                    "paddingRight": "0.5rem",
                    "paddingLeft": "0.5rem"
                  },
                  "style-tablet": {
                    "gap": "1rem",
                    "width": "100%",
                    "paddingRight": "0.5rem",
                    "paddingLeft": "0.5rem"
                  },
                  "style": {
                    "display": "flex",
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
                      "style-mobile": {},
                      "style-tablet": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
                          "style": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
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
                      "style-mobile": {},
                      "style-tablet": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
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
                  "style-mobile": {
                    "gap": "1rem",
                    "width": "100%",
                    "paddingRight": "0.5rem",
                    "paddingLeft": "0.5rem"
                  },
                  "style-tablet": {
                    "gap": "1rem",
                    "width": "100%",
                    "paddingRight": "0.5rem",
                    "paddingLeft": "0.5rem"
                  },
                  "style": {
                    "display": "flex",
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
                      "style-mobile": {},
                      "style-tablet": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
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
                      "style-mobile": {},
                      "style-tablet": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
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
                          "style-mobile": {},
                          "style-tablet": {},
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
        "sectionType": "footer",
        "isDroppable": true,
        "img": "https://i.ibb.co/88SwnXf/footer.jpg",
        "attributes": {
          "className": "rettro-footer",
          "style-mobile": {
            "paddingTop": "1rem",
            "paddingBottom": "1rem",
            "paddingLeft": "1rem",
            "paddingRight": "1rem",
          },
          "style-tablet": {
          },
          "style": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
            "backgroundColor": "#071112",
            "paddingTop": "3rem",
            "paddingBottom": "3rem",
            "paddingLeft": "3rem",
            "paddingRight": "3rem",
            "gap": "2rem",
            // "minHeight": "35vh",
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
              "style-mobile": {
                "fontSize": "2rem",
              },
              "style-tablet": {
              },
              "style": {
                "fontFamily": "Lato regular",
                "fontSize": "3rem",
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
              "style-mobile": {
              },
              "style-tablet": {
              },
              "style": {
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
                  "style-mobile": {
                    "fontSize": "1.1rem"
                  },
                  "style-tablet": {
                  },
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
                  "style-mobile": {
                    "fontSize": "1.1rem"
                  },
                  "style-tablet": {
                  },
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
                  "style-mobile": {
                    "fontSize": "1.1rem"
                  },
                  "style-tablet": {
                  },
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
                  "style-mobile": {
                    "fontSize": "1.1rem"
                  },
                  "style-tablet": {
                  },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
              "style": {
                "color": "gray",
                "fontSize": "0.85rem",
                "textAlign": "center",

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
    "image": "https://i.ibb.co/DRMKTMg/beauty.jpg",
    "title": "Rachel's Beauty saloon",
    "isTemplate": true,
    "children": [
      {
        "id": utilService.makeId(),
        "type": "section",
        "sectionType": "header",
        "isDroppable": true,
        "img": "https://i.ibb.co/41RvS0K/xszcxzsccxzxzcxzc.png",
        "attributes": {
          "className": "",
          "style-mobile": {
          },
          "style-tablet": {
          },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
                  "style-mobile": {
                  },
                  "style-tablet": {
                  },
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
                  "style-mobile": {
                  },
                  "style-tablet": {
                  },
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
                  "style-mobile": {
                  },
                  "style-tablet": {
                  },
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
        "sectionType": "section",
        "isDroppable": true,
        "img": "https://i.ibb.co/YRxsL99/xzcxccccccd.png",
        "attributes": {
          "className": "beauty-main-section",
          "style-mobile": {
            "flexDirection": "column",
            "paddingRight": '1rem',
            "paddingLeft": '1rem',
            "paddingTop": '1rem',
            "paddingBottom": '0',
          },
          "style-tablet": {},
          "style": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": 'center',
            "backgroundColor": '#f9e2e2',
            "paddingRight": '2rem',
            "paddingLeft": '2rem',
            "paddingTop": '0',
            "paddingBottom": '0',
            "gap": '2rem',
            "minHeight": '20rem'

          }
        },
        "children": [
          {
            "id": utilService.makeId(),
            "type": "section",
            "isDroppable": true,
            "attributes": {
              "className": "beauty-main-inner-section",
              "style-mobile": {
                "textAlign": "center",
                "alignItems": "center",
                "width": "100%"
              },
              "style-tablet": {},
              "style": {
                "textAlign": "left",
                "fontFamily": 'Lato regular, sans-serif',
                "display": "flex",
                "flexDirection": 'column',
                "justifyContent": "center",
                "width": "50%"
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
                  "style-mobile": {
                    "fontSize": '2.5rem',
                  },
                  "style-tablet": {
                    "fontSize": '2.5rem',
                  },
                  "style": {
                    "paddingBottom": '1rem',
                    "fontFamily": 'Lato regular, sans-serif',
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
                  'txt': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum magna mi, sit amet eleifend felis lacinia sed. Nam vel justo sed elit blandit iaculis vitae nec urna. "
                },

                "attributes": {
                  "className": "beauty-main-inner-section-txt",
                  "style-mobile": {
                    "fontSize": '1rem',
                  },
                  "style-tablet": {
                    "fontSize": '1rem',
                  },
                  "style": {
                    "paddingTop": '1rem',
                    "paddingBottom": '1.5rem',
                    "fontFamily": 'Lato regular,sans-serif',
                    "fontSize": '1.2rem',
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
                  "style-mobile": {},
                  "style-tablet": {},
                  "style": {
                    "paddingRight": '3rem',
                    "paddingLeft": '3rem',
                    "paddingTop": '0.5rem',
                    "paddingBottom": '0.5rem',
                    "fontFamily": 'Lato regular, sans-serif',
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
              "style-mobile": {},
              "style-tablet": {},
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
        "sectionType": "img",
        "isDroppable": true,
        "img": "https://i.ibb.co/9NcndgZ/skiins.png",
        "attributes": {
          "className": "web-app-img1",
          "style-mobile": {
          },
          "style-tablet": {
          },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
              "style": {
                "display": "flex",
                "alignItems": "center",
                "flexDirection": "row",
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
                  "style-mobile": {
                    "flexDirection": "column",
                  },
                  "style-tablet": {
                    "flexDirection": "row",
                  },
                  "style": {
                    "display": "flex",
                    "flexDirection": "row",
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
                      "style-mobile": {
                      },
                      "style-tablet": {
                      },
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
                      "style-mobile": {
                      },
                      "style-tablet": {
                      },
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
                  "className": "web-app-img-imgs-inner-container-right",
                  "style-mobile": {
                    "flexDirection": "column",
                  },
                  "style-tablet": {
                    "flexDirection": "row",
                  },
                  "style": {
                    "display": "flex",
                    "flexDirection": "row",
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
                      "style-mobile": {
                      },
                      "style-tablet": {
                      },
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

                      "style-mobile": {
                      },
                      "style-tablet": {
                      },
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
          "style-mobile": {
            "flexDirection": "column",
          },
          "style-tablet": {
          },
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
              "style-mobile": {
                "padding-top": "1rem",
                "padding-bottom": "1rem",
                "padding-left": "1rem",
                "padding-right": "1rem",
                "width": "100%"
              },
              "style-tablet": {
              },
              "style": {
                "display": "flex",
                "color": "#fff",
                "justifyContent": "center",
                "alignItems": "center",
                "padding-top": "2rem",
                "padding-bottom": "2rem",
                "padding-left": "2rem",
                "padding-right": "2rem",
                "width": "50%"
              }
            },
            "children": [
              {
                "id": utilService.makeId(),
                "type": "img",
                "isDroppable": false,
                "attributes": {
                  "className": "",
                  "style-mobile": {
                    "border": "10px solid #f6f6f6",
                  },
                  "style-tablet": {
                    "border": "15px solid #f6f6f6",
                  },
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
              "style-mobile": {
                "width": "100%",
                "gap": "1rem",
                "padding-top": "1rem",
                "padding-bottom": "1rem",
                "padding-left": "1rem",
                "padding-right": "1rem",
              },
              "style-tablet": {
                "gap": "2rem",
                "padding-top": "1.5rem",
                "padding-bottom": "1.5rem",
                "padding-left": "1.5rem",
                "padding-right": "1.5rem",
              },
              "style": {
                "display": "flex",
                "flexDirection": "column",
                "color": "white",
                "padding-top": "2rem",
                "padding-bottom": "2rem",
                "padding-left": "2rem",
                "padding-right": "2rem",
                "gap": "2rem",
                "fontFamily": "Lato regular,sans-serif",
                "width": "50%",
                "justifyContent": "space-between",
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
                  "style-mobile": {
                    "fontSize": "1.8rem",
                  },
                  "style-tablet": {
                    "fontSize": "2.5rem"
                  },
                  "style": {
                    "fontSize": "3rem"
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
                  "style-mobile": {
                    "fontSize": "1rem"
                  },
                  "style-tablet": {
                    "fontSize": "1rem"
                  },
                  "style": {
                    "letterSpacing": "1.5px",
                    "fontFamily": "Lato light",
                    "fontSize": "1.2rem"
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
                  "style-mobile": {
                    "paddingRight": "2rem",
                    "paddingLeft": "2rem",
                    "alignSelf": "center",
                    "marginTop": "1.5rem"
                  },
                  "style-tablet": {
                  },
                  "style": {
                    "background": "none",
                    "width": "fit-content",
                    "borderRadius": "30px",
                    "color": "#fff",
                    "borderHeight": "1.5px",
                    "borderStyle": "solid",
                    "borderColor": "#fff",
                    "fontSize": "1.2rem",
                    "paddingTop": "0.5rem",
                    "paddingBottom": "0.5rem",
                    "paddingRight": "3rem",
                    "paddingLeft": "3rem",
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
          "style-mobile": {
            "minHeight": "7rem",
          },
          "style-tablet": {
            "minHeight": "9rem",
          },
          "style": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "minHeight": "12rem",
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
    ]
  },


]


loadItemsToStorgae()
function loadItemsToStorgae() {
  const templatesFromStorage = JSON.parse(localStorage.getItem('template')) || localStorage.setItem("template", JSON.stringify(templates));
}


function query(filterBy) {
  return storageService.query(KEY)
}

function save(webApp) {
  
  if (webApp.id) {
    return storageService.put(KEY, webApp)
  } else {
    return storageService.post(KEY, webApp)
  }
}

function getById(webAppId) {
  return storageService.get(KEY, webAppId)
}

function remove(webAppId) {
  return storageService.remove(KEY, webAppId)
}
