// // propriedade IN

// const user = {
//   name: "John Doe",
//   email: "john@example.com",
//   andar() {
//     console.log("I am andar")
//   },
//   endereço: {
//     numero: 213,
//     bairro: "ponta negra",
//   },
// }

// console.log("John Doe" in user)
// console.log("name" in user)

// // método Object.keys - Retorna chaves or propriedade em forma de array

// const keyss = Object.keys(user)
// console.log(keyss)

// // Método Object.values - Retorna os valors em forma de array

// const values = JSON.stringify(Object.values(user))
// console.log(values)

// Destructuing  de objetos

const users = {
  name: "Manoel",
  age: 24,
  email: "manoeldiasmf@example.com",
}
const { name, email } = users

console.log(name)
console.log(email)
// como podemos ver eu fiz a desestruct do objeto user, passando as suas propriedade como nome da variavel, e logo apos fiz uso delas pelo próprio nome
// na linha onde estou criando a variável com os nomes observe que estou colocando como se fosse um objeto,
