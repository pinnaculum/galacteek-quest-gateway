import { qOS } from '@questnetwork/quest-os-js';

export class GalacteekQuestService {
    constructor() {
        this.os = qOS;
        this.ready = false
        this.config = {
          ipfs: {
              swarm: [
                  "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star"
              ]
          },
          version: 1.0,
          dev: false
        };
    }

    setConfig(config) {
        this.config = config;
    }

    async boot() {
        try {
            await this.os.boot(this.config);
            this.ready = true;
            qOS.signIn({})
        } catch (err) {
            throw(err);
        }
    }
}
