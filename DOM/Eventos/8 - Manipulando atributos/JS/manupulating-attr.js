function verifyEnablement() {
  let select = document.querySelector("select").value
  let pElement = document.querySelector("#message")
  if (select == "disabled") {
    document.querySelector("input[name='some-text']").disabled = true
    pElement.innerText = "Desabilitado"
    pElement.style.color = "white"
    pElement.style.backgroundColor = "black"
  } else {
    document.querySelector("input[name='some-text']").disabled = false
    pElement.innerText = ""
    pElement.style.backgroundColor = "white"
  }
}
