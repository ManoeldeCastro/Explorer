function showinfo() {
  let name = document.querySelector("input[name='name']").value
  let color = document.querySelector("select[name='color'] option:checked").text
  let likeProgram = document.querySelector(
    "input[name='like-programming']:checked"
  ).value
  let developerSkills = document.querySelectorAll(
    "input[name='developer-options']:checked"
  )
  let valores = []
  developerSkills.forEach((element) => {
    valores.push(element.value)
  })
  alert(`Name: ${name}
  Cor Favorita: ${color} 
  Gosta de Programar: ${likeProgram}
  Linguagens: ${valores.join(", ")}`)
}
// Selecionando inputs variados com o querySelector e atribuindo os valores as variáveis no JS
