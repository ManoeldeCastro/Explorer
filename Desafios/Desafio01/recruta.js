const name = prompt("Digite Seu nome completo:")
const study = prompt("Digite o que você estuda")
const nascimento = prompt("digite seu ano de nascimento:")
const yearNow = new Date().getFullYear()

alert(`Recruta cadastrado com sucesso!

Nome: ${name}
Campo de Estudo: ${study}
nascimento: ${yearNow - nascimento} anos de idade
`)
