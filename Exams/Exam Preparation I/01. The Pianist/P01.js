function solve(input) {
    const n = input.shift();
    const songs = input.slice(0, n);
    const commands = input.slice(n);
    piecesCollection = {};
    let commandParser = {
        'Add': addPiece,
        "Remove": removePiece,
        "ChangeKey": changeKey,
    };

    for (let i = 0; i < n; i++) {
        const [piece, composer, key] = input.shift().split("|");
        piecesCollection[piece] = {composer, key};

    }
    for (let inputLine of input){
        if (inputLine === "Stop"){
            break;
        }

        let commandTokens = inputLine.split("|");
        let command = commandTokens[0];

        commandParser[command](...commandTokens.slice(1))
    }


    function addPiece(piece, composer, key) {
            if(!piecesCollection.hasOwnProperty(piece)){
                piecesCollection[piece] = {composer,key}
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }
    }

    function removePiece(piece) {
        if(piecesCollection.hasOwnProperty(piece)){
           delete piecesCollection[piece];
            console.log(`Successfully removed ${piece}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    function changeKey(piece, newKey) {
        if (piecesCollection.hasOwnProperty(piece)){
            piecesCollection[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

}

solve([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
);
solve([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
    ]
);


