function Validator(password) {
    let isPassValid = true;
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters")
        isPassValid = false;
    }

    if (!password.match(/^[A-Za-z0-9]+$/g)) {
        console.log("Password must consist only of letters and digits");
        isPassValid = false;
    }

    let counter = 0;
    for (const currentChar of password) {
        let charCodeZero = "0".charCodeAt(0);
        let charCodeNine = "9".charCodeAt(0);
        let currentCharCode = currentChar.charCodeAt(0);
        if (currentCharCode >= charCodeZero && currentCharCode <= charCodeNine) {
            counter++;
        }
    }
    if (counter <= 1) {
        console.log("Password must have at least 2 digits");
        isPassValid = false;
    }

    if (isPassValid) {
        console.log("Password is valid");
    }
}

Validator('logIn');
Validator('MyPass123');
Validator('Pa$s$s');