function townsPrint(input) {
    // let townsInfo = input.reduce((acc, curr) => {
    //     const [name, lat, long] = curr.split(" | ");
    //     return acc;
    // }, {})
    // console.log(JSON.stringify(townsInfo))

    const cities = input
        .map((city) => {
            const [name, lat, long] = city.split(" | ");
            return {towns: name, latitude: lat, longtitude: long};
        })

    for (const city of cities) {
        city.latitude = Number(city.latitude).toFixed(2);
        city.longtitude = Number(city.longtitude).toFixed(2);
        console.log(`{ town: '${city.towns}', latitude: '${city.latitude}', longitude: '${city.longtitude}' }`)
    }
}

townsPrint(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
townsPrint(['Plovdiv | 136.45 | 812.575']);