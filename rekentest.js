let rl = require('readline-sync');

console.log("choose a path:");

console.log("N (North)");
console.log("S (South)");
console.log("E (East)");
console.log("W (West)");
const answer = rl.question('Please input the letter of your choice');

if (answer == "E"){
    console.log("ik ben bang voor de chinese overheid")
} else if (answer == "N"){
    console.log("ik ben bang voor de zweedse overheid")
}  else if (answer == "S"){
    console.log("ik ben bang voor de egyptishce overheid")
}  else if (answer == "W"){
    console.log("ik ben bang voor de Britse overheid")
}

console.log("help")