const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome)
// }

//metodo sem ultilzar o map, para colocar um dado de um array dentro de uma variável, e não alterar o array original
const nomes = personagens.map((value) => {
  return value.nome
})
console.log(nomes)
//utilizado o map para obter o mesmo resultado

// Exemplo 2

const numeros = [2, 4, 6]
const dobro = []

for (let i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2)
}
console.log(numeros, dobro)

const dobro2 = numeros.map((elemento) => {
  return elemento * 2
})
// obtivemos o mesmo resultado do que usando o laço for acima, isso, utilizando o método map!
console.log(dobro2)

//exemplo 3
let = nomes2 = [15, 13, 60]

let dobro3 = nomes2.map((elemt) => {
  return elemt * 2
})
console.log(dobro3)
