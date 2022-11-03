let name = prompt("type your name")
let noteOne = Number(prompt("type your first note"))
let noteTwo = Number(prompt("type your second note"))
let noteThree = Number(prompt("type your third note"))
let average = (noteOne + noteTwo + noteThree) / 3
if (average >= 7) {
  alert(`${name}, Good job! you passed, keep it up you average was ${average}`)
} else {
  alert(
    `${name} You can meet, your average hasn't the minimum value! you average was ${average} `
  )
}
