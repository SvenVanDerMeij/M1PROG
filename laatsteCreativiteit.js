const prompt = require('prompt-sync')();

game()

function game(){
let xp = 0
let maxhp = 20 
let hp = 20
let attack = 6  
let ren = 0

let naam = prompt("welkom jonge reisiger, meneer draak is eng, help ons, wat is je naam? ")
console.log("wauw, goede naam " +naam+ " je hebt exact 100 ervaringspunten nodig om meneer draak te verslaan. Hoe meer stappen je neemt, hoe hoger de kans dat je een vijand tegen komt, maar hoeveel meer health je ook krijgt. veel succes")
lopen()
function lopen(){
    if (ren >5){
        console.log("je bent dood gegaan van te veel wegrennen")
        gameOver()
        
    }
    if (hp > maxhp) {
        hp += (maxhp-hp)
    }
    if (isNaN(hp)){
        hp = Math.round((maxhp/2))
    }
console.log("je hebt nu " + hp + "/"+maxhp +"hp")
let kans = prompt("hoeveel stappen neem je? (tussen 1 en de 20)")
if (hp > maxhp) {
    hp += (maxhp-hp)
}
let bobDeBouwer = parseInt(kans);
hp += bobDeBouwer
let random = Math.round(Math.random()*20)
// console.log("hp=" +hp + "kans=" +kans + (hp+kans))
if (kans >= random) {
    enemyEncounter()
} else if (kans<random){
   lopen()
}
}

function enemyEncounter(){
    let enmlevel =  Math.round(Math.random()*5)+1
    let enmhealth = enmlevel*4 - Math.round(Math.random()*5)
    let enmattack = Math.round(Math.random()*4)+(enmlevel)
    while (enmhealth > 0){
    let keuze = prompt("Je ziet een slijm op level " + enmlevel + " , hij heeft " + enmhealth + "hp, wat doe je? aanvallen, of rennen?")
    if (hp > maxhp) {
        hp += (maxhp-hp)
    }
    if (keuze == "aanvallen"){
        let attackadd =  (Math.round(Math.random()*4))
        let enmdamage = (attack - enmlevel + attackadd)
        enmhealth -= enmdamage
        console.log("je valt aan, je doet " + enmdamage + "damage")
        if (enmhealth <= 0) {
            xp += enmlevel*4
            console.log("je hebt gewonnen, je hebt nu " + xp + "/100 xp, je gaat terug naar de overworld")
            maxhp += Math.round(xp/5)
            attack += Math.round(xp/5)
            if (xp >= 100) {
                dragonbattle()
             } else {
            lopen()
             }
        }else {
        hp -= enmattack
        console.log("de slijm valt terug aan, en doet" + enmattack + "damage, je hebt nog" + hp + "health over")
        if (hp < 1){
            gameOver()
        }
        }
    } else if (keuze == "rennen") {
        if (Math.round(Math.random()*4) >= 2){
            console.log("je bent succesvol gevlucht van het slijm")
            ren ++
            lopen()
        } else {
            console.log("wegrennen is mislukt")
            hp -= enmattack
            console.log("de slijm valt aan, en doet" + enmattack + "damage, je hebt nog" + hp + "health over")
            if (hp < 1){
                gameOver()
            }
        }
    }
}
}


}
function gameOver() {
    console.log("je hebt verloren, sorry")
    let again = prompt("wil je opnieuw beginnen?")
    if (again == "ja"){
        game()
    } else {
        gameOver()
    }
}
function dragonbattle() {
    let battle = prompt("je staat voor meneer draak, wat doe je, aanvallen of rennen?")
    if (battle == "aanvallen"){
        console.log("meneer draak valt in een keer neer, en je hebt gewonnen.")
        victory()
    } else {
        console.log("het lukt niet, maar gelukkig is meneer draak blind, dus hij mist")
        dragonbattle()
    }
}
function victory() {
    console.log("gefeliciteerd " + naam + " je hebt gewonnen")
}