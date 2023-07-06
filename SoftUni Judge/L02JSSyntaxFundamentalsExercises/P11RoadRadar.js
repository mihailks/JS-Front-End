function radar(speed, place) {
    let limit = 0;
    switch (place) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }

    if (limit >= speed) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
        return;
    }

    let typeOfSpeeding;
    if (speed - limit <= 20) {
        typeOfSpeeding = "speeding";
    } else if (speed - limit <= 40) {
        typeOfSpeeding = "excessive speeding";
    } else {
        typeOfSpeeding = "reckless driving";
    }
    console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${typeOfSpeeding}`)
}

radar(120, 'interstate');