function solve(input) {

    const parkig = new Set();

    input.forEach(entry => {
        const [command, plateNumber] = entry.split(", ");

        for (let inputElement of entry) {
            if (command === 'IN') {
                parkig.add(plateNumber);
            } else if (command === 'OUT') {
                parkig.delete(plateNumber);
            }
        }
    });


    const parkingSorted = Array.from(parkig).sort();
    if (parkig.size === 0) {
        console.log(`Parking Lot is Empty`)
    } else {
        for (const parkingSortedElement of parkingSorted) {
            console.log(parkingSortedElement)
        }
    }
}

solve(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']);
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);