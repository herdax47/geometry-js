const prompt = require ("prompt-sync")({sigint : true})

let luas, keliling, alas, tinggi, sisi1, sisi2, sisi3;
alas = parseInt(prompt("alas    : "))
tinggi = parseInt(prompt("tinggi    : "))
sisi1 = parseInt(prompt("sisi1  : "))
sisi2 = parseInt(prompt("sisi2  : "))
sisi3 = parseInt(prompt("sisi3  : "))
luas = 1/2 * alas * tinggi
keliling = sisi1 + sisi2 + sisi3

console.log('== Hasil ===')
console.log('luas')
console.log('keliling')