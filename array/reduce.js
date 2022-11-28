//Transforma um array em outro tipo de dado, pode ser Number, String, Array, Object ...
let arr = [5, 9, 12, 27, 40, 90]
let soma = 0
// for (let i = 0; i < arr.length; i++) {
//   soma += arr[i]
// }
// console.log(soma)
// //esse é um método em que podemos condensar um array e um único array. o transformalo em outro tipo de dado.

// //agora utilando o Reduce...

soma = arr.reduce((soma, numero) => {
  return (soma += numero)
}, 5)
console.log(typeof soma, soma)

//o Reduce comprimiu o array para o único numero, e transformou o dado no tipo Number, importante ressaltar que o numero pois a função seguido da virgula é o valor inicial, no caso acima foi soma inicia com o valor 5, depois é somado aos valores acima de cada elemento do array

//Exemplo 2
// nesse exemplo vamos utilizar um objeto para subir mais um nível acessando a propriedade nivel do objeto somando todas e devolvendo um dado do tipo Number com um único valor

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

let soma2 = personagens.reduce((final, personagem) => {
  return final + personagem.nivel
}, 0)

console.log(soma2)

// Estrutura do Reduce,

// 1° parâmetro - valor acumulado ou valor que vai receber todos os valores da soma, para melhor entendimento podemos colocar o primeiro parâmetro com o mesmo nome da variável que está recebendo o reduce, não sendo isso uma pratica obrigatória

// 2° parâmetro -  é quem recebe cada elemento do array - no exemplo acima o 2 parâmetro está recebendo cada objeto do array personagem
// para  contextualizar melhor o parâmetro 2, como o Reduce é um método que funciona como um laço, cada volta nova o "personagem"  que é o 2° parâmetro acessa uma nova chave/index desse array

// O escopo, no escopo não precisamos colocar como se tivesse acessando cada index, pois o próprio método já entende o que queremos, como personagem que é o 2° parâmetro ta acessando um objeto podemos então acessar as suas propriedades de forma dinâmica e é o que fazemos, colocando "personagem.nivel", que seria o mesmo que personagens[n].nivel

// apos a função, estamos colocando o valor 0 apos a função e uma virgula, significa que o primeiro parâmetro recebe o valor 0 para que se inicie a soma, se colocarmos outro valor ele iniciara a somar como um valor que colocarmos, como foi feito acima com o numero 5.

//exemplo 3
const raca = personagens.reduce((raca, personagem) => {
  if (raca[personagem.raca] === "Orc") {
    raca.orcs = personagem.raca
  } else if (personagem.raca === "Humano") {
    raca.humano = personagem.raca
  } else {
    raca.elfo = personagem.raca
  }

  return raca
}, {})

console.log(raca)
