function convert(jsonStr){
    let person  = JSON.parse(jsonStr);
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');