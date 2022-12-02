class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }
  speedup(acceleration) {
    this.currentVelocity += acceleration
    if (this.currentVelocity > this.maxRecommendedVelocity) {
      console.log("VELOCIDADE MAXIMA ULTRAPASSADA!!")
    }
  }
}

class BattleSpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0
    console.log("Recolhendo armas e parando nave de batalha")
  }
}

class DiscoverySpaceship extends BattleSpaceship {
  stop() {
    this.currentVelocity = 0
    console.log("Recolhendo equipamentos e parando nave de descoberta")
  }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("fenix", 8, 240)
darwin.speedup(70)
fenix.speedup(90)
console.log(darwin, fenix)

darwin.stop()
fenix.stop()
console.log(darwin, fenix)
