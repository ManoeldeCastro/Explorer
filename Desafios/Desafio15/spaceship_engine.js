export default class {
  constructor(spaceship) {
    this.spaceship = spaceship
  }
  turnOn() {
    Promise.all([this.podeLigar(), this.testeEscudo()])
      .then((valores) => {
        return this.normalizadorEscudo(valores[1])
      })
      .then((escudoNormal) => {
        this.spaceship.escudo = escudoNormal
        console.log(this.spaceship.escudo)
      })
      .catch((erro) =>
        console.log(`${this.spaceship.name} - Parida não autorizado ${erro}`)
      )
  }
  podeLigar() {
    return new Promise((resolve, reject) => {
      let percent = this.spaceship.energyPercent()
      if (percent >= 30) {
        resolve(percent)
      } else {
        reject("carga em apenas: " + percent + "GJ")
      }
    })
  }
  testeEscudo() {
    return new Promise((resolve, reject) => {
      let dobroEscudo = this.spaceship.escudo * 2
      if (dobroEscudo >= 100) {
        resolve(dobroEscudo)
      } else {
        reject("Escudo em sobrecarga")
      }
    })
  }
  normalizadorEscudo(escudo) {
    return new Promise((resolve, reject) => {
      let escudoNormal = escudo * 0.7
      if (escudoNormal >= 120) {
        reject("Escudo em supercarga")
      } else {
        resolve(escudoNormal)
      }
    })
  }
}
