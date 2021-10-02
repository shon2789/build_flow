// Verify that only the webApp owner can request it
function requireAuth(req, res, next) {
  const userWebApps = req.session.user.webApps;
  const webAppId = req.params.webAppId;
  if(userWebApps.some(webApp => webApp._id === webAppId)){
    next()
  } else {
    res.status(401).end('Not authenticated, Please Login')
  }
}

module.exports = {
  requireAuth,
}
