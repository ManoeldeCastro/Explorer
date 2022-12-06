let spaceship = ["Colossus", "Ártemis", "Fenix"]
console.log(spaceship)

//em ES6+
console.log(...spaceship)
//em ES5
console.log.apply(this, spaceship)
//mesmo resultado em obter o array de forma separada
// outra maneira é usando o join
console.log(spaceship.join(" "))

// utility
//1- atribuir valores de um array a outro de forma menos verbosa.
let newSpaceships = ["Puller", ...spaceship]
console.log(newSpaceships)
console.log(...newSpaceships)

//2- Passando argumentos com spread
function speedUp(velocity, acceleration) {
  return velocity + acceleration
}
let ship = [60, 10]

let newVelocity = speedUp(...ship) // note que a função precisa de 2 argumentos, com spread passamos os 2 argumentos de forma dinâmica.
console.log(newVelocity)
