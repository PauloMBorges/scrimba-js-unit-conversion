const meterToFeet =  3.2808399
const literToGallon =  0.264172052
const kiloToPound =  2.204
const MAX_VALUE = 10000000

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let warningEl = document.getElementById("warning-el")

convertBtn.addEventListener("click", convert)

function convert() {
    let inputValue = inputEl.value /* get user input */

    if(inputValue > MAX_VALUE) {
        warningEl.style.display = "inline"
        warningEl.innerText = `The maximum allowed value is ${MAX_VALUE.toLocaleString()}.`
        return
    } else {
        warningEl.style.display = "none"
    }

    if(inputValue !== '') {
        let feetValue = (inputValue * meterToFeet).toFixed(3)
        let meterValue = (inputValue / meterToFeet).toFixed(3)
        lengthEl.innerHTML =  `<p id="length-el">${inputValue} meters = ${feetValue} feet | ${inputValue} feet = ${meterValue} meters</>`

        let gallonValue = (inputValue * literToGallon).toFixed(3)
        let literValue = (inputValue / literToGallon).toFixed(3)
        volumeEl.innerHTML = `<p id="volume-el">${inputValue} liters = ${gallonValue} gallons | ${inputValue} gallons = ${literValue} liters</p>`
        
        let kiloValue = (inputValue * kiloToPound).toFixed(3)
        let poundValue = (inputValue / kiloToPound).toFixed(3)
        massEl.innerHTML = `<p id="mass-el">${inputValue} kilos = ${kiloValue} pounds | ${inputValue} pounds = ${poundValue} kilos</p>`
    }

}   

let darkModeBtn = document.getElementById("dark-mode-btn")
darkModeBtn.addEventListener("click", toggleDarkMode)

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
    document.querySelector('.container-top').classList.toggle('dark-mode')
    document.querySelector('.container-bottom').classList.toggle('dark-mode')
}