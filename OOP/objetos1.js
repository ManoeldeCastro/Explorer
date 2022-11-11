// // trabalhando com métodos e propriedades de objetos.
// function media() {
//   return (this.notas[0] * 2 + this.notas[1]) / 3
// }
// // passando função como método do objeto - e estudando a variável this.
// const person = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
//   notas: [9, 8.7],
//   media,
// }

// const person2 = {
//   name: "Ricardo",
//   age: 32,
//   email: "john@example.com",
//   notas: [5, 10],

//   media,
// }
// console.log(person.media(), person2.media().toFixed(2))
// para entendimento, estou passando a function acima como método do objeto person, a função está sendo declarada antes do objeto, mas está passando propriedades do objeto person, isso é possível por ser uma função. a variável this, se refere ao objeto da qual esta sendo chamada,

//constructor - construindo objeto com função.

// Criando função que cria um novo objeto a partir dos parâmetros, e utilizando short hand para objetos, que é quando um objeto tem um propriedade com o mesmo nome do parâmetro
function criarAluno(nome, age, nota1, nota2) {
  return {
    nome,
    age,
    nota1,
    nota2,
    media() {
      return ((nota1 * 2 + nota2) / 3).toFixed(2)
    },
  }
}
const manoel = criarAluno("Manoel", 24, 8, 10) // criando objeto com função e colocando numa variável
// const { nota1 } = manoel //destruct de uma propriedade do objeto
// console.log(nota1)

//passando objeto manoel para um array e criando novos objetos dentro do array com a function construtora
var turma = [
  manoel,
  criarAluno("Michele", 32, 8, 9),
  criarAluno("Ricardo", 25, 8, 7),
]

//forEach - andando nos elementos do array turma com o método forEach, que inicia no elemento 0 e vai ate o ultimo elemento do array, sendo o parâmetro nesse caso identificado com elemento, cada vez que for executado o laço o elemento é incrementado, sendo assim acessando os elementos do array do 0 ate o fim.
turma.forEach(function (elemento) {
  console.log(elemento.media())
})
// outra maneira para realizar a mesma coisa é através do for of
for (nomes of turma) {
  console.log(nomes.nome)
}
// no exemplo com ForEach o que mudou foi que estamos acessando propriedades diferente do objeto, mas o contexto desse laço é a mesma coisa.  no caso elemento e nomes, estão recebendo cada vez que é repetido o laço os elementos do objeto, como eu criei 3 objetos, eu estou acessando a propriedade nome de cada objeto, e o método media() de cada objeto.
