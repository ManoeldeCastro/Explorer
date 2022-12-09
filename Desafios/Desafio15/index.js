import Spaceship from "./spaceship.js"
import spaceshipEngine from "./spaceship_engine.js"

let sophia = new spaceshipEngine(new Spaceship("Sophia", 10, 5, 70))
let amsterda = new spaceshipEngine(new Spaceship("Amsterdã", 14, 10, 40))
let dwarfStart = new spaceshipEngine(new Spaceship("Estrela-Anâ", 20, 4, 80))

sophia.turnOn()
amsterda.turnOn()
dwarfStart.turnOn()
