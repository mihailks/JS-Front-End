function printDNA(number) {

    let dna = "ATCGTTAGGG";
    let counter = 0;

    for (let i = 0; i < number; i++) {
        if (i % 4 == 0) {
            console.log(`**${dna[counter % 10]}${dna[(counter % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${dna[counter % 10]}--${dna[(counter % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${dna[counter % 10]}----${dna[(counter % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${dna[counter % 10]}--${dna[(counter % 10) + 1]}*`);
        }
        counter += 2;
    }
}

printDNA(4);
// printDNA(20)