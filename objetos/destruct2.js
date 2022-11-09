//Destructuring Array
const frutas = ["Banana", "Uva", "Morango"]
const fruta1 = frutas[0]
const fruta2 = frutas[1]
const fruta3 = frutas[2]
//console.log(fruta1, fruta2, fruta3)
// caminho comum de destruct de array

const [f1, f2, f3] = frutas
// console.log(f1, f2, f3)
// mesmo resultado do que foi escrito a cima, so que atribuímos variáveis f1 , f2 , f3 para cada fruta do array, sem precisar escrever tanto
// podemos observar que é o mesmo modelo do Object so que com array usamos [] no lugar das {}, mas no final o que precisamos fazer é so atribuir o valor as variáveis que estão sendo criadas dentro do Array a o Array original que é frutas.

// o que muda do objeto é que ja podemos definir os nomes que queremos, para cada elemento do array

// Destructuring objetos nos argumentos da function
const qualtecla = ({ key }) => {
  console.log(key)
}
const qualtecla2 = (g) => {
  console.log(g.key)
}
document.addEventListener("keyup", qualtecla)
document.addEventListener("keyup", qualtecla2)
// as duas coisas acima estão fazendo a mesma coisa, so que uma esta usando a destruct e outra esta fazendo de maneira normal, como todo event retorna um objeto, podemos pegar a propriedade ou método desse objeto mais rápido, fazendo a destruct, nesse caso estamos pegando a propriedade key.
