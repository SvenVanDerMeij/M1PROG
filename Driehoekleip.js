function driehoekkie(a, b){
    let langekant = Math.sqrt(((a*a)+(b*b)))
    return  langekant
}

let SchuineZijde = driehoekkie(4, 3)
console.log(SchuineZijde)