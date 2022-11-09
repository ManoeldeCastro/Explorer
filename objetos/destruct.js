// Destructuing  de objetos
/* como podemos ver eu fiz a destruct do objeto user, passando as suas propriedade como nome da variável, e logo apos fiz uso delas pelo próprio nome,
na linha onde estou criando a variável com os nomes observe que estou colocando como se fosse um objeto, e passando como nome da variável o a propriedade e elas estão recebendo users, que é o nome do objeto em si. 
 */

// const users = {
//   name: "Manoel",
//   age: 24,
//   email: "manoeldiasmf@example.com",
// }
// const { name, email } = users

// console.log(name)
// console.log(email)

// camada simples

let jogos = {
  PC: {
    RPG: {
      jogo1: "Elden ring",
      jogo2: "Assassin is creed",
    },
    Tiro: {
      jogo1: "Call of duty",
      jogo2: "GTA5",
    },
  },
  PS4: {
    RPG: {
      jogo1: "Far-cry",
      jogo2: "Last of us",
    },
    Tiro: {
      jogo1: "Call of duty 3",
      jogo2: "GTA4",
    },
  },
}
// const { PC } = jogos                     // acessando o objeto PC no Object jogos
// const { RPG } = PC                       // acessando o objeto RPG no Object PC que esta no Object jogos
// const { jogo1, jogo2 } = RPG             //acessando as propriedades jogo1 e jogo2 do objeto RPG do Object PC do Object jogos

// podemos perceber que com isso podemos acessar as propriedades de um objeto muito mais fácil
// é preciso ir ate o nível onde se encontra o que está procurando, pois caso o que voce passe como variável não esteja no nível correto o resultado será undefined.
// console.log(jogo1, jogo2)

// camadas compostas através de aninhamento

// destruct dentro da destruct - percebemos abaixo que estamos passando o Object PC do Object jogos, e separado pro virgula estamos passando as propriedades(Object) do PC, que são RPG e Tiro, e Dentro de RPG estamos Acessando as propriedades jogo1 e jogo2, fazendo a mesma coisa da parte de cima, e declarando no total de 5 variáveis de uma vez só

// const {
//   PC,

//   PC: {
//     RPG,
//     Tiro,
//     RPG: { jogo1, jogo2 },
//   },
// } = jogos
// function mostrar() {
//   console.log(PC)
//   console.log(RPG)
//   console.log(Tiro)
//   console.log(jogo1)
//   console.log(jogo2)
// }
// mostrar()

// uma maneira fácil para enxergar isso é que estamos criando no nome da variável um novo Object sendo filho do objeto que esta sendo passado como valor, onde as chaves são os acessos para o objeto pai e as propriedades ou elementos do objeto pai estão sendo criadas múltiplas variáveis para o objeto filho, perceba que a cor das variáveis são brancas e as propriedade do objeto pai são laranjas.

// agora trocando o nome da variável que esta recebendo a propriedade do objeto pai, e adicionando propriedades e valores que ainda n existiam no objeto pai.
//na linha abaixo eu mudei no nome, depois criei um novo Objeto "PS1" em seguida Criei um novo Objeto "RPG" e atribui propriedade/chave jogo1 com o valor "castlevania"
let { PC: jogosPc, PS1 = { RPG: { jogo1: "Castlevania" } } } = jogos

const { PC } = jogos

console.log(jogosPc)
console.log(PC)
console.log(PS1.RPG)
// Simples, perceba que agora o objeto(filho) PC do objeto(Pai) Jogos, está recebendo o nome "jogosPC" no lugar de PC, isso ser ve para mudar o nome, mais n altera o Object raiz
// vale lembrar que quando criada variáveis fora do elemento pai, o seu valor original não muda!!! IMPORTANTE!

console.log(jogos) // a prova disso está aqui
