import ChainMap from "@/chainMap.js";
import PlayerManager from "@/playerManager.js";

export default class Manager {
  constructor() {
    this.chainMap = new ChainMap();
    this.playerManager = new PlayerManager();
  }

  movePlayer (id, step) {
    if (! step) {
      step = Math.ceil(Math.random() * 6);
    }
    let curr = this.playerManager.getCurrPosition();
    let dest = this.chainMap.findDestination(step);
    this.playerManager.movePlayer(id, dest);
  } 

  getPlayer (id) {
    // now the id is their idx in the array
    return this.players[id];
  }
}