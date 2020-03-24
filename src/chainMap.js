import City from "@/city.js";
export default class ChainMap {
  constructor() {
    // create a map with 10 * 10 tiles
    this.cities = [];
    let next; 
    let curr;
    let id = 99;
    for (let i = 9; i > -1; i--) {
      for (let j = 9; j > -1; j--) {
        curr = new City(i, j, next, id);
        this.cities.push(curr);
        next = curr;
        id--;
      }
    }
    this.cities = this.cities.reverse();

    this.cities[99].next = this.cities[0];
  }

  findTile (id) {
    return this.cities[id];
  }

  findNextId (id) {
    return this.findTile(id).next.id;
  }

  findDestination (step) {
    return null;
  }
}