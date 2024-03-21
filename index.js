let number = document.getElementById("inputConvert")
let btn = document.getElementById("button")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

btn.addEventListener("click", function(){
   let num =  number.value
   length.innerHTML = `${num} meter = ${Number(num * meterToFeet).toFixed(2)} feet | ${num} feet = ${Number(num / meterToFeet).toFixed(2)} meters`
   volume.innerHTML = `${num} liter = ${Number(num * literToGallon).toFixed(2)} Gallon | ${num} Gallon = ${Number(num / literToGallon).toFixed(2)} liter`
   mass.innerHTML = `${num} kilo = ${Number(num * kiloToPound).toFixed(2)} Pound  | ${num} Pound  = ${Number(num / kiloToPound).toFixed(2)} kilo`
   number.value = " "
   localStorage.clear()


})

