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
            "marginTop": "10rem",
            "marginLeft": "0",
          },
          "style-tablet": {
            "fontSize": "7.3rem",
            "textAlign": "center",
            "marginLeft": "0",
          },
          "style": {
            "fontFamily": "Birthstone regular,sans-serif",
            "marginTop": "12rem",
            "fontSize": "7.3rem",
            "marginLeft": "10rem",

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
            "marginLeft": "0",
            "textAlign": "center",
          },
          "style-tablet": {
            "marginLeft": "0",
            "textAlign": "center",
          },
          "style": {
            "marginTop": "4rem",
            "fontSize": "2.6rem",
            "fontFamily": "Birthstone regular,sans-serif",
            "letterSpacing": "0.45rem",
            "marginLeft": "10rem",
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
      "style-mobile": {
      },
      "style-tablet": {
      },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
              "style-mobile": {
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
            "backgroundColor": "red"
          },
          "style-tablet": {
            "backgroundColor": "royal-blue"
          },
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
              "style-mobile": {
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
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
              "style-mobile": {
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
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
              "style-mobile": {
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
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
          "style-mobile": {
            "backgroundColor": "red"
          },
          "style-tablet": {
            "backgroundColor": "royal-blue"
          },
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
      "style-mobile": {
      },
      "style-tablet": {
      },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
      "style-mobile": {
      },
      "style-tablet": {
      },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
      "style-mobile": {
      },
      "style-tablet": {
      },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
              "style-mobile": {
              },
              "style-tablet": {
              },
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
                  "style-mobile": {
                  },
                  "style-tablet": {
                  },
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
      "style-mobile": {
      },
      "style-tablet": {
      },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
          "style-mobile": {
          },
          "style-tablet": {
          },
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
                "alignItems": "center",
                "flexDirection": "row",
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
                  "src": "https://a-cloud.b-cdn.net/media/iW=263&iH=any/d03-Img-Guy-Shirt.jpg",
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
                "flexDirection": "column"
              },
              "style-tablet": {
                "flexDirection": "row"
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
                "type": "img",
                "isDroppable": false,

                "attributes": {
                  "className": "web-app-imgs-img",
                  "src": "https://a-cloud.b-cdn.net/media/iW=263&iH=any/d03-Img-Girl-Blonde-Curly.jpg",
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
                  "src": "https://a-cloud.b-cdn.net/media/iW=264&iH=any/d03-Img-Girl-Locks.jpg",

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
        "backgroundColor": "red"
      },
      "style-tablet": {
        "backgroundColor": "royal-blue"
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
            "backgroundColor": "red"
          },
          "style-tablet": {
            "backgroundColor": "royal-blue"
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
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
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
            "backgroundColor": "red"
          },
          "style-tablet": {
            "backgroundColor": "royal-blue"
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
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
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
              "style-mobile": {
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
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
              "style-mobile": {
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
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
              "style-mobile": {
                "backgroundColor": "red"
              },
              "style-tablet": {
                "backgroundColor": "royal-blue"
              },
              "style": {

                "background": "none",
                "width": "fit-content",
                "borderRadius": "30px",
                "color": "#fff",
                "borderHeight": "1.5px",
                "borderStyle": "solid",
                "borderColor": "#fff",
                "paddingTop": "0.5rem",
                "fontSize": "1.2rem",
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
      },
      "style-tablet": {
      },
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
  {
    "id": utilService.makeId(),
    "type": "section",
    "sectionType": "card",
    "isDroppable": true,
    "img": "https://i.ibb.co/1MmXdcN/anothersection.png",
    "attributes": {
      "className": "rettro-cards-section",
      "style-mobile": {},
      "style-tablet":{},
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
          "style-tablet":{},
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
          "style-tablet":{},
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
          "style-tablet":{
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
              "style-tablet":{
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
                  "style-tablet":{},
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
                      "style-tablet":{},
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
                      "style-tablet":{},
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
                  "style-tablet":{},
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
                      "style-tablet":{},
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
                      "style-tablet":{},
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
              "style-tablet":{
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
                  "style-tablet":{},
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
                      "style-tablet":{},
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
                      "style-tablet":{},
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
                  "style-tablet":{},
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
                      "style-tablet":{},
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
                      "style-tablet":{},
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
    "isDroppable": true,
    "img": "https://i.ibb.co/YRxsL99/xzcxccccccd.png",
    "attributes": {
      "className": "beauty-main-section",
      "style-mobile": {
        "flexDirection": "column",
      },
      "style-tablet":{},
      "style": {
        "display": "flex",
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
          "style-mobile": {
            "textAlign": "center",
            "alignItems": "center"
          },
          "style-tablet":{},
          "style": {
            "textAlign": "left",
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
              "style-mobile": {},
              "style-tablet":{},
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
              "style-mobile": {},
              "style-tablet":{},
              "style": {
                "paddingTop": '1rem',
                "paddingBottom": '1.5rem',
                "fontFamily": 'Lato regular,sans-serif',
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
              "style-mobile": {},
              "style-tablet":{},
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
          "style-mobile": {},
          "style-tablet":{},
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