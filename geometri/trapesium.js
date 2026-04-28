const prompt = require("prompt-sync")({ sigint: true })

let a,b,c,d,t,luas,keliling

a = parseInt(prompt("Sisi a : "))
b = parseInt(prompt("Sisi b : "))
c = parseInt(prompt("Sisi c : "))
d = parseInt(prompt("Sisi d : "))
t = parseInt(prompt("Tinggi : "))

luas = 0.5 * (a + b) * t
keliling = a + b + c + d

console.log("hasil")
console.log("Luas : " + luas)
console.log("Keliling : " + keliling)