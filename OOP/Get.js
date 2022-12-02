class Carro {
  constructor(modelo, chassi, qtdPortas) {
    this.modelo = modelo
    this.chassi = chassi
    this.qtdPortas = qtdPortas
    this.velMax = 100
  }
  get andar() {
    return this.velMax / 4
  }
}

const punto = new Carro("Punto", "1234213", 4)

console.log(punto.andar)
