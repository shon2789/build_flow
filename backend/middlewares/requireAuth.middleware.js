const webAppService = require("../api/webApp/webApp.service");
const ObjectId = require('mongodb').ObjectId

// Verify that only the webApp owner can request it
async function requireAuth(req, res, next) {
  const webAppId = req.params.webAppId;
  const webApp = await webAppService.getById(webAppId)

  if (webApp.isTemplate) {
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
  requireAuth,
  requireDeleteAuth
}
