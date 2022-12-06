let spaceship = {
  name: "Colossus",
  crewQuantity: 10,
  isHitched: false,
}
const {
  name: naveName,
  crewQuantity: tripulantes,
  isHitched: ealgo,
} = spaceship
//Destructuring de propriedades, com mudança no nome da variável
console.log(naveName, tripulantes, ealgo)
//Destructuring não altera o noma da propriedade, apenas da variável.
console.log(spaceship.name, spaceship.crewQuantity, spaceship.isHitched)

// Destructuring com array
let spaceships = ["Colossus", "Artemis", "Fenix"]
let [nave1, , nave3] = spaceships
// Destructuring pulando chave do array
console.log(nave1, nave3)
//Mesma coisa da do objeto, mas como a chave do array é numerada, pode atribuir o nome direto e a destruct é feita com [] no lugar de {}
