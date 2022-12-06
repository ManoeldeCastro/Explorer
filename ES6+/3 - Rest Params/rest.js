//...Rest - Maneira de Passar parâmetros infinitos para um function
function bemVindo(mensagem, ...names) {
  console.log(names) // parâmetros a mais em array
  names.forEach((name) => {
    console.log(`${mensagem}, ${name}`)
  })
}
bemVindo("Seja bem vindo", "Manoel", "Michele", "Ricardo", "Gabriel")

//percebemos que a função pedia 2 argumentos. mas como foi utilizado o Rest..., os nomes que foram passados a mais foram atribuídos a o parâmetro "names" em forma de array, podendo assim utilizar o forEach que é um método para array.

//em síntese  os parâmetros a mais viram um array com rest

//IMPORTANTE!!! - um Rest parâmetro sempre precisa ser o ultimo parâmetro na função.
