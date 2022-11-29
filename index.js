let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")
let countH = 0 
let countG = 0

function plushome1() {
    countH += 1
    countHome.textContent = countH
}

function plushome2() {
    countH += 2
    countHome.textContent = countH
}

function plushome3() {
    countH += 3
    countHome.textContent = countH
}

function plusguest1() {
    countG += 1
    countGuest.textContent = countG
}

function plusguest2() {
    countG += 2
    countGuest.textContent = countG
}

function plusguest3() {
    countG += 3
    countGuest.textContent = countG
}