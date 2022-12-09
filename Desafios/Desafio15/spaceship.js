class Spaceship {
  constructor(name, maxEnergy, Atual, escudo) {
    this.name = name
    this.maxEnergy = maxEnergy
    this.Atual = Atual
    this.escudo = escudo
  }
  energyPercent() {
    return (this.Atual * 100) / this.maxEnergy
  }
}
export default Spaceship
