const spaanseDansers = ["Sonia", "floria", "Gloria", "qloria", "bob"]
const franseDansers = ["Josee", "Jaques"]
let aantaldames = spaanseDansers.length
console.log("aantal vrouwen ="+aantaldames)
let woord = spaanseDansers.toString();
console.log("de dames in 1 woord: "+ woord)
let wiskunde = spaanseDansers.join("+");
console.log(wiskunde)
console.log("ik ga bob apart zetten, ik vertrouw haar niet")
let bob = spaanseDansers.pop();
console.log(spaanseDansers)
console.log(bob)
console.log("tijd voor nieuwe bob")
spaanseDansers.push("bob2")
console.log(spaanseDansers)
console.log("ik vertrouw sonia ook niet")
let sonia = spaanseDansers.shift()
console.log(sonia)
console.log(spaanseDansers)
console.log("tijd voor een nieuwe vrouw")
spaanseDansers.unshift("roosmerta")
console.log("nog een")
spaanseDansers[0] = "maria";
console.log(spaanseDansers)
console.log("nieuwe backup danser:")
spaanseDansers[spaanseDansers.length] = "alberta"
console.log(spaanseDansers)
delete spaanseDansers[0];
console.log("Maria is naar de shadow realm verbannen")
console.log(spaanseDansers)
console.log("we hadden 1 franse vrouw die we niet erbij wouden doen, maar het budget is op")
const dansers = spaanseDansers.concat(franseDansers)
console.log (dansers)
console.log("dit ziet er raar uit, wacht")
const nieuweDansers = dansers.flat();
console.log(nieuweDansers)
console.log("we hebben dansers in het midden nodig")
nieuweDansers.splice(3, 0, "Evert", "Pablo")
console.log(nieuweDansers)
console.log("de fransen hebben nu een bijbaantje bij de febo")
 const afval = nieuweDansers.slice(7, 9);
 console.log(nieuweDansers)
 console.log(afval)