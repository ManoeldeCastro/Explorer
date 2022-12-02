console.log("Métodos Math e Date")

//Matg
console.log(
  Math.pow(7, 8),
  "= (7^8) - Pow = Potencialização - Método estático, pq não precisamos instanciar o Objeto math"
) // pow(x,y) = multiplica x*x, y vezes ou seja o potencializa
console.log(Math.PI, "= PI - Método estático, que retorna o valor de PI")

console.log(
  Math.sqrt(144),
  "= 12*12=144 - Raiz quadrada - Método estático, que retorna o valor da raiz quadrada"
)

//Date
let myBirthDay = new Date(2022, 05, 17) // Date o mes começa no 0, sendo 0 = Janeiro, 1 = fevereiro ... e assim por diante, ou seja funciona como um array. - nesse exemplo instanciamo um novo objeto Date
console.log(myBirthDay)

console.log(
  Date.now(),
  "- Retorna a data atual em milisegundos, a partir da data base que é 01/01/1970, ou seja esse resultado é o tempo que já passou em milissegundos. now = método estático"
) //
