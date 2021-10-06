const express = require('express')
const expressSession = require('express-session')
const cors = require('cors')
const path = require('path')

const app = express()
const http = require('http').createServer(app)

const session = expressSession({
    secret: 'BuildFlow is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

app.use(express.static('public'))
app.use(express.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    // Express serve static files on production environment
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    // Configuring CORS
    // Make sure origin contains the url your frontend is running on
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const webAppRoutes = require('./api/webApp/webApp.routes')
const cmpRoutes = require('./api/cmp/cmp.routes')
const { connectSockets } = require('./services/socket.service')


// Routes

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/webApp', webAppRoutes)
app.use('/api/cmp', cmpRoutes)
connectSockets(http, session)


app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030


http.listen(port, logger.info(`running on ${port}`))
