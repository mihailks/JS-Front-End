function convert(name,lastName,hairColor){
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    console.log(JSON.stringify(person));
}

convert('George', 'Jones', 'Brown');
convert('Peter', 'Smith', 'Blond');