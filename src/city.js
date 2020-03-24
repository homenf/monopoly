export default class City {
  constructor(x, y, next,name, id) {
    // x,y should refer to their physical location.
    this.x = x;
    this.y = y;
    this.price = (Math.ceil(Math.random() * 10) + 5) * 1000;
    this.name = name || "ABC";
    this.next = next;
    this.id = id;
  }
}