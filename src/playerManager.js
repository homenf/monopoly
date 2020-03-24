import Player from "@/player.js";
export default class PlayerManager {
  constructor() {
    this.players = [];
    this.players.push(new Player(0, 0));
    this.players.push(new Player(1, 0));
  }

  movePlayer (id, dest) { 
    this.getPlayer(id).walk(dest);
  } 

  getPlayer (id) {
    // now the id is their idx in the array
    return this.players[id];
  }
}