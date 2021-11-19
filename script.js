// const christmas = new Date(2021, 11, 25)
// const today = new Date()

// const dif = christmas.getTime() - today.getTime()

// const dayBeforeChristmas = dif / 1000 / 60 / 60 / 24

// console.log(dayBeforeChristmas)

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getDay()) // 0-6 => commence à dimanche

// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString())

// console.log(date.getTime())

// console.log(Date.now())

// const fn = function() {

// }

// function fn () {

// }

// const fn = () => {

// }

// const fn = () => (console.log("Bonjour"))

// setTimeout(function() {
//     console.log("Bonjour")
// }, 5000)


// const timeHTML = document.querySelector(".paragraphe")
// timeHTML.innerText = "Bonjour"

// const paragraphe = document.createElement("p")
// paragraphe.innerHTML = "Au revoir"

// const zoneHTML = document.getElementById("zone")
// zoneHTML.appendChild(paragraphe)

    // SetInterval

// const clockHTML = document.getElementById("time")

// function displayTime () {
//     const date = new Date()

//     clockHTML.innerText = date.toLocaleTimeString() // 15:52:25
// }

// setInterval(displayTime, 200)

    // SetTimeout

// const clockHTML = document.getElementById("time")

// function displayTime() {
//     const date = new Date()

//     clockHTML.innerText = date.toLocaleTimeString() // 15:52:25

//     setTimeout(displayTime, 200)
// }

// displayTime()

// function consoleLog () {
//     console.log("Mouse over")
// }

// const btnHTML = document.getElementById("btn")
// const inputHTML = document.getElementById("input")

// btnHTML.addEventListener("click", consoleLog)

// inputHTML.addEventListener("click", () => {
//     inputHTML.value = ""
// })

const btnAddHTML = document.getElementById("add")
const btnResetHTML = document.getElementById("reset")
const counterHTML = document.getElementById("value")
counterHTML.innerText = "0"

// let nbr = 0

// function modifNbr() {
//     counterHTML.innerText = nbr
// }

btnAddHTML.addEventListener("click", function() {
    const value = counterHTML.innerText
    counterHTML.innerText = parseInt(value) + 1
})

btnResetHTML.addEventListener("click", function() {
    counterHTML.innerText = "0"
})

// Commentaire
