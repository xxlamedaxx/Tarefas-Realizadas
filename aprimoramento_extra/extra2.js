// nuemro par ou impar
function numero(n) {
  if (n % 2 == 0) {
    return "par";
  }
  if (n % 2 != 0) {
    return "impar";
  }
}
console.log(numero(7));
