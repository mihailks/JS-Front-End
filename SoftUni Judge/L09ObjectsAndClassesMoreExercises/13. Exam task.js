function organizePianoPieces(input) {
  let pieces = {};

  let n = parseInt(input.shift());

  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = input.shift().split("|");
    pieces[piece] = { composer, key };
  }

  for (let command of input) {
    if (command === "Stop") break;

    let [action, piece, composer, key] = command.split("|");

    switch (action) {
      case "Add":
        addPiece(piece, composer, key);
        break;
      case "Remove":
        removePiece(piece);
        break;
      case "ChangeKey":
        changeKey(piece, composer);
        break;
    }
  }

  function addPiece(piece, composer, key) {
    if (!pieces.hasOwnProperty(piece)) {
      pieces[piece] = { composer, key };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  }

  function removePiece(piece) {
    if (pieces.hasOwnProperty(piece)) {
      delete pieces[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  function changeKey(piece, newKey) {
    if (pieces.hasOwnProperty(piece)) {
      pieces[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  for (let piece in pieces) {
    console.log(
      `${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`
    );
  }
}

organizePianoPieces([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
