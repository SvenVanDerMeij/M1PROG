
const prompt = require('prompt-sync')();
let huidigeTijd = new Date();
let slaapproblemen = false
if (huidigeTijd.getDay() == 1) {
    console.log("je loopt naar het mediacollege op maandag")
} else if (huidigeTijd.getDay() == 2) {
    console.log("je loopt naar het mediacollege op dinsdag")
} else if (huidigeTijd.getDay() == 3) {
    console.log("je loopt naar het mediacollege op woensdag")
} else if (huidigeTijd.getDay() == 4) {
    console.log("je loopt naar het mediacollege op donderdag")
} else if (huidigeTijd.getDay() == 5) {
    console.log("je loopt naar het mediacollege op vrijdag")
} else if (huidigeTijd.getDay() == 6) {
    console.log("je loopt naar het mediacollege op zaterdag")
} else if (huidigeTijd.getDay() == 7) {
    console.log("je loopt naar het mediacollege op zondag")


}
if (huidigeTijd.getHours() >= 9  && ((huidigeTijd.getHours() <= 15 && huidigeTijd.getMinutes() <= 45) || (huidigeTijd.getHours() >= 16))){
    slaapproblemen == true
} else {
    slaapproblemen == false
}
if (huidigeTijd.getDay() < 6){
let WC1 = prompt("Mag ik je schoolpas zien? ")


if (WC1 == "ja" && slaapproblemen == false) {
    console.log("kom binnen lieve meneer, mevrouw of non-binair persoon")
} else if (WC1 != "ja" && slaapproblemen == false) {
    console.log("helaas, nu mag niet naar binnen, non scholier")
} else if (WC1 == "ja" && slaapproblemen == true) {
    console.log("meneer, het is te laat, ga naar huis, je familie mist je, je bent al 5 maanden niet thuis geweest, en ze maken zich zorgen om je. Wees blij dat je naar huis en naar school kan, want de arme mensen in de huidige staat van China kunnen dat niet.")
} else if (WC1 != "ja" && slaapproblemen == true){
    console.log("*de deur wordt niet open gedaan, en de medewerkers staren je ongemakkelijk aan*")
}

} else {
    console.log("het is weekend, niemand doet open, en je loopt in schaamte en verdriet naar huis")
}

