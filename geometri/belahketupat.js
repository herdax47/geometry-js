const prompt = require("prompt-sync")({ sigint: true })

let d1, d2, sisi, luas, keliling

d1 = parseInt(prompt("Diagonal 1 : "))
d2 = parseInt(prompt("Diagonal 2 : "))
sisi = parseInt(prompt("Sisi : "))

luas = 0.5 * d1 * d2
keliling = 4 * sisi

console.log("\nhasil")
console.log("Luas : " + luas)
console.log("Keliling : " + keliling)