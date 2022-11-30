const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

personagens.sort((a, b) => {
  return b.nivel - a.nivel
})

console.log(personagens)
// método sort ordena os elementos em ordem, os parâmetros acima representa os elementos, nesse caso estou acessando em cada elemento a propriedade .nivel e organizando em ordem crescente se o resultado a operação de returno for positivo ele faz em ordem crescente, caso seja negativo em ordem decrescente.

// o sort modifica o array.
