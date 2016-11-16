export default class Plate {
  constructor(weight) {
    this.weight = weight;
    this.label = weight.toString().replace('.', '-');
  }

  getWeight() {
    return (this.weight * 1);
  }

  getLabel() {
    return this.label;
  }

}
