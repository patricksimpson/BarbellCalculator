import Plate from './Plate';

export default class Plates {
  constructor() {
    this.plates = [];
  }

  addPlate(plate, x) {
    this.plates.push( {
      plate: plate,
      number: x
    });
  }

  removePlate(plate, x) {

  }

};
