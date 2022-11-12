function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade + " Anos"
  this.andar = () => {
    return this.nome + " Andou"
  }
}

const joao = new Pessoa("joão", 20)
const maria = new Pessoa("maria", 25)
const bruno = new Pessoa("bruno", 15)

console.log(joao.andar())

function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor)
  ;(this.addclass = (classe) => {
    for (elemento of this.elements) {
      elemento.classList.add(classe)
    }
  }),
    (this.removeclass = (classe) => {
      for (elemento of this.elements) {
        elemento.classList.remove(classe)
      }
    })
}
const list = new Dom("li")
list.addclass("new")
