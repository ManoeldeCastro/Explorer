const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
// modo de filtrar sem usar o método filter
// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   if (personagens[i].raca === "Orc") {
//     orcs.push(personagens[i])
//   } else {
//     noOrcs.push(personagens[i])
//   }
// }

const orcs = personagens.filter((personagem) => {
  return personagem.raca === "Orc"
})

console.log(orcs)

// o primeiro parâmetro é o valor da propriedade podemos colocar qualquer nome, em cima eu coloquei personagem, aqui eu coloquei elemt.
const humanos = personagens.filter((elemt) => {
  return elemt.raca === "Humano"
})

console.log(humanos)
