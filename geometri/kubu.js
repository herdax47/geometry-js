const prompt = require("prompt-sync")({sigint : true})

let sisi, luaspermukaan, volume
sisi = parseInt(prompt("sisi    : "))
volume = sisi * sisi * sisi
luaspermukaan = 6 * (sisi * sisi)
    console.log('==Hasil==')
    console.log("volume =", volume)
    console.log("luaspermukaan =", luaspermukaan)