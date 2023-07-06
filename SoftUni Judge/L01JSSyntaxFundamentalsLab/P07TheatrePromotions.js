function promo(typeOfTheDay, age) {
    let price = 0;
    if (age >= 0 && age <= 18) {
        if (typeOfTheDay === "Weekday") {
            price = 12;
        } else if (typeOfTheDay === "Weekend") {
            price = 15;
        } else if (typeOfTheDay === "Holiday") {
            price = 5;
        }
    } else if (age >= 18 && age <= 64) {
        if (typeOfTheDay === "Weekday") {
            price = 18;
        } else if (typeOfTheDay === "Weekend") {
            price = 20;
        } else if (typeOfTheDay === "Holiday") {
            price = 12;
        }
    } else if (age > 64 && age <= 122) {
        if (typeOfTheDay === "Weekday") {
            price = 12;
        } else if (typeOfTheDay === "Weekend") {
            price = 15;
        } else if (typeOfTheDay === "Holiday") {
            price = 10;
        }
    }
    if (price === 0) {
        console.log("Error!")
    } else {
        console.log(price + "$");
    }
}