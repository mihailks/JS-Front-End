function Login(input) {

    let password = input[0].split("").reverse().join("")

    for (let i = 1; i < input.length; i++) {
        if (input[i] === password) {
            console.log(`User ${input[0]} logged in.`)
            return
        }
        if (i === 4) {
            console.log(`User ${input[0]} blocked!`)
        } else {
            console.log(`Incorrect password. Try again.`)
        }
    }
}

Login(['Acer', 'login', 'go', 'let me in', 'recA']);
Login(['momo', 'omom']);
Login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);