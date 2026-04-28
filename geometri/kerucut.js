const prompt = require("prompt-sync")({sigint : true})

let volume, luas_permukaan, pi, r, tinggi, s
pi = parseInt(prompt("pi    : "))
r = parseInt(prompt("rr : "))
tinggi = parseInt(prompt("tinggi    : "))
s = parseInt(prompt("s  : "))
volume = (1/3)* pi * r * r * tinggi
luas_permukaan = pi * r * (r + s),  s = sqrtManual((r * r) + (tinggi * tinggi))
    console.log(\n= Hasil =)
    console.log("volume =", volume)
    console.log("luas_permukaan =", luas_permukaan)