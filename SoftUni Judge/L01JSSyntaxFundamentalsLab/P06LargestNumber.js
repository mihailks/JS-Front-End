function maxNumber(a, b, c) {
    let largest = 0;

    if (a > b && a > c) {
        largest = a;
    } else if (b > a && b > c) {
        largest = b;
    } else {
        largest = c;
    }
    console.log(`The largest number is ${largest}.`);
}

