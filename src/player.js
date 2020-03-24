export default class Player {
  constructor(personalId, locationId) {
    this.personalId = personalId;
    this.locationId = locationId;
  }

  walk (dest) {
    this.locationId = dest;
  }
}