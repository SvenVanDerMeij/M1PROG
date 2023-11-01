const prompt = require('prompt-sync')();

start ()
function start(){
let score = 0
console.log("yo man, welkom bij de quiz van honderd miljoen miljard over Sven van der Meij, ik ben uw host, Sven van der Meij.")
let naam = prompt(" We hebben 1 deelnemer, wat is uw naam jongeman?")
console.log("hallo " + naam + " hier zijn de regels: er zullen 4 antwoorden zijn, A, B, C, D, als antwoord vul je enkel de letter als hoofdletter in, en druk je dan op enter. Hier is nu de eerste vraag:")
let A1 = prompt("hoe oud ben ik? A: 16, B: 18, C: 19, D: 20. Uw antwoord hier: ")
if (A1 == "B"){
    console.log("correct")
    score += 1
} else{
    console.log("fout, het juiste antwoord was 18")
}
let A2 = prompt("hoeveel huisdieren heb ik? A: 0, B: 1, C: 2, D: 3. Uw antwoord hier: ")
if (A2 == "A"){
    console.log("correct")
    score +=1
}   else{
    console.log("fout, het juiste antwoord was 0")
}
let A3 = prompt("hoeveel uur heb ik in het spel bloons tower defense 6? A: minder dan 400, B: 400-500, C: 500-600, D: 600+")
if (A3 == "D"){
    console.log("correct")
    score +=1
} else{
    console.log("fout, het juiste antwoord was 600+")
}
let A4 = prompt("Waar woont mijn half-zus? A: België B: Australië C: Canada D:Zuid-Afrika" )
if (A4 == "B"){
    console.log("correct")
    score += 1
} else {
    console.log("fout, het juiste antwoord was Australië")
}

if (score == 4){
    console.log("lekker bezig " + naam + " je hebt to nu toe een perfecte score, als je een perfecte-perfecte score wilt kan dat nu, deze laatste vraag is namelijk 10.000 punten waard.")
} else if (score == 3){
    console.log("oké " + naam + " je hebt 3 punten, goed gedaan, je had er tot nu toe 1 fout, maar gelukkig kan je je gemiste punt samen met nog 9.999 terug verdienen, want de laatste vraag is 10.000 punten waard")
} else if (score == 2){
    console.log("zo, je hebt tot nu toe de helft goed, en aangezien je me niet kent is dat nogsteeds best wel knap, maar gebasseerd hierop gaat je score heel goed, of heel slecht zijn, de laatste vraag is namelijk 10.000 punten waard")
} else if (score == 1){
    console.log("hm, je hebt er maar 1 goed, niet geweldig, maar je hebt 1 op de 4 goed, dus dat is nog tenminste een beetje logisch, maar geen zorgen, met deze laatste vraag kan je 10.000 punten erbij verdienen, je kan dit")
} else {
    console.log("oké, jij hebt gwn pech de kans dat je alles fout hebt door te gokken is 31,8%, maar geen zorgen, je kan jezelf redeemen, deze laatste punt is namelijk 10.000 punten waard, dus goed opletten, dit was een belangrijke")
}
let A5 = prompt("laatste vraag, erg belangrijk dat je deze goed krijgt, kom op: Wat is mijn lievelingskleur? A: Groen, B: Blauw, C: Paars, D: Rood") 
if (A5 == "C"){
    console.log("correct, je hebt 10.000 punten gewonnen")
    score += 10000
} else {
    console.log("fout, het spijt me, je hebt gefaald, het was paars")
}
console.log("gefeliciteerd " + naam + ", je hebt " + score + " punten")
replay()
}

function replay(){
let playAgain = prompt("wil je opnieuw spelen, ja of nee?")
if (playAgain == "ja"){
    start()
}
}