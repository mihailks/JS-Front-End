function printAddress(input) {
    // let addressBook = {};
    //
    // for (const currentInput of input) {
    //     let info = currentInput.split(":");
    //     let name = info[0];
    //     let address = info[1];
    //     addressBook[name] = address;
    // }

    let addressBook = input.reduce((acc, curr) => {
        const [name, address] = curr.split(":");
        acc[name] = address;
        return acc;
    }, {});

    Object.entries(addressBook)
        .sort()
        .forEach(([key, value]) => {
            console.log(`${key} -> ${value}`);
        });
}


printAddress(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

printAddress(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);
