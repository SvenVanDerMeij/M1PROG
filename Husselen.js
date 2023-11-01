function everydayImShuffeling(input) {

    const characters = input.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    const geschudWoord = characters.join('');

    console.log(geschudWoord)
    }

    var chinees = everydayImShuffeling("ik haat het leven");
    var indisch = everydayImShuffeling("ik haat het bestaan");
    var belgisch = everydayImShuffeling("ik haat belgen");