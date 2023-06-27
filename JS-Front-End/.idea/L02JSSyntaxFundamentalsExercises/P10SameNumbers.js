function same(number) {
    let digit = number % 10;
    let sum = 0;
    let theSame = true;
    while (number > 0) {
        let currentDigit = number % 10;
        if (currentDigit !== digit) {
            theSame = false;
        }
        sum += currentDigit;
        number = Math.trunc(number / 10);
    }
    console.log(theSame)
    console.log(sum)
}

