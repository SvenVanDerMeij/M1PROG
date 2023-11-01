let zin1 = ("als jij je vinger in mijn kont steekt van ron van zalmsaus")
let zin2 = ("")

function spongebob() {
for (let i = 0;  i < zin1.length; i++){
    if (Math.random() >= 0.5){
    zin2 += (zin1.charAt(i).toUpperCase()) 
    } else{
        zin2 += (zin1.charAt(i).toLowerCase()) 
    }
}
}
spongebob()
console.log (zin2)
