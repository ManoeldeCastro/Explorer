class Spaceship {
  constructor(name, maxEnergy, Atual) {
    this.name = name
    this.maxEnergy = maxEnergy
    this.Atual = Atual
  }
  energyPercent() {
    return (this.Atual * 100) / this.maxEnergy
  }
}
export default Spaceship
