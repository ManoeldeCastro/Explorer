olaMundo()
oiMundo()

//Função normal sofre o hosting.
function olaMundo() {
  console.log("Olá, Mundo")
}

//Função anonima não sofre o hosting
let oiMundo = function () {
  console.log("Oi, Mundo")
}
