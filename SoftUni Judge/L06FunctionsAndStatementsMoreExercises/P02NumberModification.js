function solve(number) {
    let startingNumber = number;
    let average = 0;
    while (average < 5) {
        let digitsCounter = 0;
        average = 0;
        while (number > 0) {
            average += number % 10;
            number = Math.trunc(number / 10);
            digitsCounter++;
        }
        average/=digitsCounter;
        if (average<5){
            startingNumber += "9";
        }
        number = Number(startingNumber);
    }
    console.log(number);
}

solve(101);
solve(5835);