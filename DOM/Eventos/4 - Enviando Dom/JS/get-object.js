//pegando valor através do this como argumento da função. this referencia a própria tag que executou a função.
function sayMyFirstName(elemt) {
  // element recebe o this, e o this recebe a tag HTML
  alert("Meu primeiro nome é: " + elemt.value)
}

//pegando valor através do Object Event.target
//event é um variável global que recebe o evento que foi executado em forma de Objeto, contendo algumas funções
//target é uma propriedade do objeto Event que referencia o local de onde veio o evento.
function sayMyLastName() {
  console.log(event)
  console.log(event.target.value)
}
