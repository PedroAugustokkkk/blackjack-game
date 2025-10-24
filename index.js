// Variáveis genéricas
let firstCard = 10
let secondCard = 15
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
// Variáveis usando DOM
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " e " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = ("Gostaria de pegar uma nova carta?")
    } else if (sum === 21) {
        message = ("Boa! Conseguiu fazer BlackJack!")
        hasBlackJack = true
    } else {
        message = ("Você perdeu ;-;")
        isAlive = false
    }
    messageEl.textContent = message
}
    