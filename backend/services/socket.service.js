const logger = require('./logger.service');

var gIo = null

function connectSockets(http, session) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
            methods: [
                'GET', 'POST', 'PUT', 'DELETE'
            ]
        }
    })
    gIo.on('connection', socket => {

        socket.on('disconnect', () => {

            socket.to(socket.myRoom).emit('user-left')

        })
        // Signing in a room / creating a new room
        socket.on('roomId', ({ roomId, myUserName }) => {
            if (socket.myRoom === roomId) return;
            if (socket.myRoom) {
                socket.leave(socket.myRoom)
            }
            socket.join(roomId)
            socket.myRoom = roomId
            socket.to(socket.myRoom).emit('user-joined', myUserName)
        })

        // Emit the webApp to all the users on an update from frontend
        socket.on('webApp', webApp => {
            socket.to(socket.myRoom).emit('webApp return', webApp)
        })

        // When a pointer data received, emit to all users
        socket.on('update-pointers', (data) => {
            socket.broadcast.to(socket.myRoom).emit('show-pointers', data);
        })
        // socket.on('update-pointers', ({ pointers, userId, name, color, x, y }) => {
        //     const currentPointer = pointers.findIndex(pointer => pointer.userId === userId)
        //     // Not found, add new to the pointers array
        //     if (currentPointer === -1) {
        //         pointers.push({ userId, name, color, x, y })
        //         // Update the array with the existing user's new data
        //     } else {
        //         pointers[currentPointer].x = x;
        //         pointers[currentPointer].y = y;
        //     }
        //     //Emit all, except the sender
        //     socket.to(socket.myRoom).emit('show-pointers', pointers)
        // })
    })
}

function emitTo({ type, data, label }) {
    if (label) gIo.to('watching:' + label).emit(type, data)
    else gIo.emit(type, data)
}

async function emitToUser({ type, data, userId }) {
    logger.debug('Emiting to user socket: ' + userId)
    const socket = await _getUserSocket(userId)
    if (socket) socket.emit(type, data)
    else {
        console.log('User socket not found');
        _printSockets();
    }
}

// Send to all sockets BUT not the current socket 
async function broadcast({ type, data, room = null, userId }) {
    console.log('BROADCASTING', JSON.stringify(arguments));
    const excludedSocket = await _getUserSocket(userId)
    if (!excludedSocket) {
        logger.debug('Shouldnt happen, socket not found')
        _printSockets();
        return;
    }
    logger.debug('broadcast to all but user: ', userId)
    if (room) {
        excludedSocket.broadcast.to(room).emit(type, data)
    } else {
        excludedSocket.broadcast.emit(type, data)
    }
}

async function _getUserSocket(userId) {
    const sockets = await _getAllSockets();
    const socket = sockets.find(s => s.userId == userId)
    return socket;
}
async function _getAllSockets() {
    // return all Socket instances
    const sockets = await gIo.fetchSockets();
    return sockets;
}
// function _getAllSockets() {
//     const socketIds = Object.keys(gIo.sockets.sockets)
//     const sockets = socketIds.map(socketId => gIo.sockets.sockets[socketId])
//     return sockets;
// }

async function _printSockets() {
    const sockets = await _getAllSockets()
    console.log(`Sockets: (count: ${sockets.length}):`)
    sockets.forEach(_printSocket)
}
function _printSocket(socket) {
    console.log(`Socket - socketId: ${socket.id} userId: ${socket.userId}`)
}

module.exports = {
    connectSockets,
    emitTo,
    emitToUser,
    broadcast,
}



