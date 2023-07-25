function solve(input) {
  const produrts = input.reduce((acc, curr) => {
    const [key, value] = curr.split(" : ");
    acc[key] = Number(value);
    return acc;
  }, {});



  const sortedKeys = Object.keys(produrts).sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });

  if (sortedKeys.length === 0) {
    return;
  }
  let letter = sortedKeys[0][0];

  console.log(letter);

  sortedKeys.forEach((key) => {
    if (key[0] !== letter) {
      letter = key[0];
      console.log(letter);
    }
    console.log(`  ${key}: ${produrts[key]}`);
  });
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
solve(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);

solve(["AZpricot : 20.4", "Aapricot : 20.4"]);
