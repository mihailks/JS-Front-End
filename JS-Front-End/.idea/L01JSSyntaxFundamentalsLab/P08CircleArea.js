function circleArea(area) {
    let inputType = typeof (area);
    if (inputType === "number") {
        console.log((Math.PI * area * area).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

