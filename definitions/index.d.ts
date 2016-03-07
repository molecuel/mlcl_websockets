declare class MlclWebsockets {
    static loaderversion: number;
    static singleton: boolean;
    static molecuel: any;
    socketsrv: SocketIO.Server;
    constructor(molecuel: any, config: any);
}
export = MlclWebsockets;
