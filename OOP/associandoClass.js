class Caption {
  constructor(name, age, flightHours) {
    this.name = name
    this.age = age
    this.flightHours = flightHours
  }
}

class Spaceship {
  constructor(name, crewQuantity, captionName, captionAge, captionFlightHours) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.caption = new Caption(captionName, captionAge, captionFlightHours)
  }
}
let destroier = new Spaceship("Destroier", 50, "dathe Vader", 40, 990)

console.log(destroier)

//aninhando classes, ou associando elas, passando como argumentos os paramentos para que se instancie um novo objeto
