let planet_json = `{
  "name": "terra",
  "physicalCharacteristics": {
    "surfaceArea": 510072000,
    "equatorialDiameter": 12756.2
  },
  "color": ["Azul", "Branco", "Marrom"],
  "startRotation": "00:00",
  "finishRotation": "23:59"
}`
console.log(planet_json)
let planet = JSON.parse(planet_json)
console.log(planet)
//Note que quando escrevemos o JSON a Propriedades Recebem o "" para serem escritas. o valroes são escritos de forma normal, como se tivesse fazendo um objeto.

//json - é usado para as linguagens de diferentes tipos se comunicarem. a tratativa dos dados devem ser feitas no programa que recebe os dados.
