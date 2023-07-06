function Uppercase(inputStr){
    let words = inputStr.toUpperCase().match(/\w+/g);
    console.log(words.join(', '));
}

Uppercase('Hi, how are you?');
Uppercase('FUNCTIONS, IN, JS, CAN, BE, NESTED, I, E, HOLD, OTHER, FUNCTIONS');

