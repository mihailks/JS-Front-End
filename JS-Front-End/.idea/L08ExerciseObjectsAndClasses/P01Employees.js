function employees(input) {

    let employees = input.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});


    Object.entries(employees).forEach(([key, value]) => {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    });

}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);