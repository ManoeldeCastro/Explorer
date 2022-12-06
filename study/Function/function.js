function normal() {
  console.log(this.name)
}
let arrow = () => {
  console.log(name)
}

let testingArrow = {
  name: "escola",
  normalFuntion: normal,
  arrow: arrow,
}
let name = "casa"
testingArrow.arrow() // refencia ao escopo onde ela está
testingArrow.normalFuntion() // refencia ao escopo onde ele foi atribuida
