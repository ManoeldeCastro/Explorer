// let fatorial = (num) => {
//   let i
//   for (i = num - 1; i > 0; i--) {
//     console.log(`
//       ${num} * ${i}
//     `)
//     num = num * i
//   }
//   return num
// }
// resolvendo com laço

let fatorial = (num) => {
  if (num === 0) {
    return 1
  } else if (num === 1) {
    return 1
  } else {
    return num * fatorial(num - 1)
  }
}
console.log(fatorial(10))
// utilizando as funções recursivas! para obter o mesmo resultado!
