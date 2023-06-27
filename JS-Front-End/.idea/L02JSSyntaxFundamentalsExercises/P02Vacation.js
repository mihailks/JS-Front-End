function calculatePrice(numberOfPeople, typeOfPeople, day) {
    let price = 0;
    switch (typeOfPeople) {
        case "Students":
            if (day === "Friday") {
                price = 8.45;
            } else if (day === "Saturday") {
                price = 9.80;
            } else if (day === "Sunday") {
                price = 10.46;
            }
            break;
        case "Business":
            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price = 15;
            } else if (day === "Saturday") {
                price = 20;
            } else if (day === "Sunday") {
                price = 22.50;
            }
            break;
    }

    if (typeOfPeople === "Students" && numberOfPeople >= 30) {
        price *= 0.85;
    }
    if (typeOfPeople === "Business" && numberOfPeople >= 100) {
        numberOfPeople -= 10;
    }
    if (typeOfPeople === "Regular" && numberOfPeople >= 10 && numberOfPeople <= 20) {
        price *= 0.95;
    }
    let total = numberOfPeople * price;
    console.log(`Total price: ${total.toFixed(2)}`)
}

calculatePrice(30,
    "Students",
    "Sunday")

calculatePrice(40,
    "Regular",
    "Saturday")