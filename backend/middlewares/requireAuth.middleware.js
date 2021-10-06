const webAppService = require("../api/webApp/webApp.service");
const ObjectId = require('mongodb').ObjectId


function requireAuth(req, res, next) {
  if (!req.session || !req.session.user) {
    res.status(401).end('Not authenticated, Please Login')
    return
  }
  next()
}


// Verify that only the webApp owner can request it
async function requireWebAppAuth(req, res, next) {
  const webAppId = req.params.webAppId;
  const webApp = await webAppService.getById(webAppId)

  if (webApp.isTemplate || webApp.isPublished) {
    next()
    return
  }

  const userWebApps = req.session.user.webApps;
  if (userWebApps.some(webApp => webApp._id === webAppId)) {

    next()
  } else {
    res.status(401).end('Not authenticated, Please Login')
  }
}

async function requireDeleteAuth(req, res, next) {
  const webAppId = req.params.webAppId;

  const userWebApps = req.session.user.webApps;
  if (userWebApps.some(webApp => webApp._id === webAppId)) {
    next()
  } else {
    res.status(401).end('Not authenticated, Please Login')
  }
}

module.exports = {
  requireWebAppAuth,
  requireDeleteAuth,
  requireAuth
}
