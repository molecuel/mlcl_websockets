'use strict';
import socketio = require('socket.io');

class MlclWebsockets {
  public static loaderversion = 2;
  public static singleton = false;
  public static molecuel;
  public socketsrv: SocketIO.Server;

  constructor(molecuel: any, config: any) {
    MlclWebsockets.molecuel = molecuel;
    this.socketsrv = socketio();
    MlclWebsockets.molecuel.on('mlcl::core::init:server', (molecuel, server) => {
      this.socketsrv.attach(server);
    });
  }
}

export = MlclWebsockets;
