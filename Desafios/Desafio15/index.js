import Spaceship from "./spaceship.js"
import spaceshipEngine from "./spaceship_engine.js"

let sophia = new spaceshipEngine(new Spaceship("Sophia", 10, 5))
let amsterda = new spaceshipEngine(new Spaceship("Amsterdã", 14, 10))
let dwarfStart = new spaceshipEngine(new Spaceship("Estrela-Anâ", 20, 4))

sophia.turnOn()
amsterda.turnOn()
dwarfStart.turnOn()
console.log("olá")
