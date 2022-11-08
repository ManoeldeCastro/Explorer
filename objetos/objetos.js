// propriedade IN
const user = {
  name: "John Doe",
  email: "john@example.com",
  andar() {
    console.log("I am andar")
  },
  endereço: {
    numero: 213,
    bairro: "ponta negra",
  },
}
console.log("John Doe" in user)
console.log("name" in user)

// método Object.keys - Retorna chaves or propriedade em forma de array
const keyss = Object.keys(user)
console.log(keyss)

// Método Object.values - Retorna os valors em forma de array
const values = JSON.stringify(Object.values(user))
console.log(values)
