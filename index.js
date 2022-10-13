function runbf(text) {
  a = []
  for (let i = 0; i < 100; i++) {
    a[i] = 0
  }
  index = 0
  n = 0
  return eval(text.replace("+", "a[index]++; n++; ").replace("-", "a[index]--; n--; ").replace("<", "index--; n = a[index]; ").replace(">", "index++; n = a[index]; ").replace("[", "while (n != 0) {").replace("]", "} ").replace(",", "n = new Number(Prompt(\"Enter the number\", \"0\")); ").replace(".", "alert(n)"))
}
