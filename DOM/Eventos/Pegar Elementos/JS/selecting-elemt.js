function show() {
  let elements = document.getElementsByName("phone")
  //document.getElementById("name") - By id
  console.log(elements)
  elements.forEach((name, i) => {
    console.log(name, i)
  })
}
