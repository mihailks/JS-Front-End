function matrix(number){
    let row = [];
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            row.push(number);
        }
        console.log(row.join(" "))
        row = [];
    }
}

matrix(3)