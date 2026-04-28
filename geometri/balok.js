const prompt = require("prompt-sync")({ sigint: true })

let p, l, t
let volume, luasPermukaan, keliling

p = parseInt(prompt("Panjang : "))
l = parseInt(prompt("Lebar : "))
t = parseInt(prompt("Tinggi : "))

volume = p * l * t
luasPermukaan = 2 * ((p*l) + (p*t) + (l*t))
keliling = 4 * (p + l + t)

console.log("hasil")
console.log("Volume : " + volume)
console.log("Luas Permukaan : " + luasPermukaan)
console.log("Keliling Rusuk : " + keliling)