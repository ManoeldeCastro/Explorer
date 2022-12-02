// unindo static com get
class Spaceship {
  static get deceleration() {
    return 0.15
  }
  constructor(name) {
    this.name = name
    this.currentVelocity = 0
  }
  speedUp(acceleration) {
    this.currentVelocity += acceleration * (1 - Spaceship.deceleration)
  }
}

let darwin = new Spaceship("darwin")

darwin.speedUp(100)
console.log(darwin)

// relembre o static faz com que a função seja util sem instanciar o objeto é o que fazemos na linha 12
// o get faz com que a função retorne sem precisar evokar a função.
// juntando ambos não precisamos nem instanciar o objeto nem precisamos usar o parenteses para evokar a função. o valor fica disponível como se fosse uma variável.
