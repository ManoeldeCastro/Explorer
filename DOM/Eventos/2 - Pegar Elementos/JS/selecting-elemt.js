function show() {
  let elements = document.getElementsByTagName("input")
  //document.querySelectorAll("#phones") - Por seletor css
  //document.getElementsByName("phone") - Por name
  //document.getElementById("name") - Por id
  console.log(elements)

  // for each nao funciona com HTMLcollection
  // elements.forEach((name /*, i , p*/) => {
  //   //   //name - elemento html
  //   //   //i - index do nodelist/array
  //   //   //p - parents = o mesmo array que foi passado no forEach
  //   console.log(name)
  // })
}
