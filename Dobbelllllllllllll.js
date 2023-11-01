

function RollDice(ding) {
    const lijst = []
    let AAAAAAAAAAAA = Math.round((Math.random()*5)+1)
    lijst.push(AAAAAAAAAAAA)
    let BBBBBBBBBBBB = Math.round((Math.random()*5)+1)
    lijst.push(BBBBBBBBBBBB)
    let CCCCCCCCCCCC = Math.round((Math.random()*5)+1)
    lijst.push(CCCCCCCCCCCC)
    let DDDDDDDDDDDD = Math.round((Math.random()*5)+1)
    lijst.push(DDDDDDDDDDDD)
    let minst = Math.min.apply(Math, lijst)
 
    let stat = AAAAAAAAAAAA + BBBBBBBBBBBB +CCCCCCCCCCCC + DDDDDDDDDDDD -  minst
    console.log(ding+": "+stat)
    }
    RollDice("charisma")
    RollDice("drunk driving skills")
    RollDice("child abuse")
    RollDice("lego star wars the skywalker saga")
    RollDice("wedding planning")

    
    