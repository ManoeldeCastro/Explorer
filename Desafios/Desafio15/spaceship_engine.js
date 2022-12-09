export default class {
  constructor(spaceship) {
    this.spaceship = spaceship
  }
  turnOn() {
    this.podeLigar()
      .then((percent) => {
        console.log(
          `${this.spaceship.name}, está com ${percent}% da carga, é pode decolar`
        )
      })
      .catch((percent) => {
        console.log(
          `${this.spaceship.name}, está com ${percent}% da carga, e não pode decolar`
        )
      })
  }
  podeLigar() {
    return new Promise((resolve, reject) => {
      let percent = this.spaceship.energyPercent()
      if (percent >= 30) {
        resolve(percent)
      } else {
        reject(percent)
      }
    })
  }
}
