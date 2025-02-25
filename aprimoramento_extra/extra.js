function numero(n) {
  if (n > 0) {
    return "positivo";
  } else if (n < 0) {
    return "negativo";
  } else {
    return "neutro/zero";
  }
}

console.log(numero(4));
console.log(numero(-4));
