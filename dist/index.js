'use strict';
const socketio = require('socket.io');
class MlclWebsockets {
    constructor(molecuel, config) {
        MlclWebsockets.molecuel = molecuel;
        this.socketsrv = socketio();
        MlclWebsockets.molecuel.on('mlcl::core::init:server', (molecuel, server) => {
            this.socketsrv.attach(server);
        });
    }
}
MlclWebsockets.loaderversion = 2;
MlclWebsockets.singleton = false;
module.exports = MlclWebsockets;
