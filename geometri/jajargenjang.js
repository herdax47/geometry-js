const prompt = require("prompt-sync")({sigint : true})

let luas, keliling, alas, tinggi, a, b
alas = parseInt(prompt("alas    : "))
tinggi = parseInt(prompt("tinggi    : "))
a = parseInt(prompt("a  : "))
b = parseInt(prompt("b  : "))
luas = alas * tinggi
keliling = 2 * (a + b)

console.log("Hasil")
console.log("luas : " + luas)
console.log("keliling : " + keliling)