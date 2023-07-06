function perfectNumber(number) {
    let divisorsArr = [];
    for (let i = 0; i < number; i++) {
        if (number%i==0){
            divisorsArr.push(i);
        }
    }
    let sum = 0;
    for (const divisorsArrElement of divisorsArr) {
        sum+=divisorsArrElement;
    }
    if (sum===number){
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);