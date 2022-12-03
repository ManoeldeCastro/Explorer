let i = 1
function addNewPhone() {
  i++
  let form = document.querySelector("form")
  let novoP = document.createElement("p")
  novoP.innerHTML = `<label for="">Telefone ${i}:</label>
        <input type="text" id="phone"></input>
`

  form.appendChild(novoP)
}
function printPhones() {
  const phones = document.querySelectorAll("input")
  phones.forEach((phone, i) => {
    console.log(`Telefone ${i + 1}: ${phone.value}`)
  })
}
