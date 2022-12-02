class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }
}

class TransportSpaceShip extends Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedVelocity)
    this.maxLoadWeight = maxLoadWeight
  }
}
