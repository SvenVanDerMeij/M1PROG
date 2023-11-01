let i = 0

function doeding(){
    i += 1
    console.log(i)
    if (i < 1000) {
        doeding()
    } else {
        console.log("klaar")
    }
}
doeding()