// Password array
var passwordArr = [];

// DOM Objects
var generateBtn = document.getElementById('generate');


// Collection of all popup functions to acquire password criteria
function getCriteria() {
    lengthPrompt();
    lowercaseConfirm();
    uppercaseConfirm();
    numericConfirm();
    symbolsConfirm();
    generatePassword();

    function lengthPrompt() {
        var passwordLength = parseInt(prompt('Type a password length from 8 to 128 characters'));

        if (passwordLength >= 8 && passwordLength <= 128) {
            passwordArr.push(passwordLength);
        } else {
            alert('Please type a number from 8 to 128');
            lengthPrompt()
        }
    };

    function lowercaseConfirm() {
        var lowercaseChars = confirm("Include lowercase letters?");
        passwordArr.push(lowercaseChars)
    };

    function uppercaseConfirm() {
        var uppercaseChars = confirm("Include uppercase characters?");
        passwordArr.push(uppercaseChars)
    };

    function numericConfirm() {
        var numericChars = confirm("Include numbers?");
        passwordArr.push(numericChars)
    };

    function symbolsConfirm() {
        var symbolChars = confirm("Include symbols?");
        passwordArr.push(symbolChars);
    };
};


//CHARACTER RANDOMIZER CODE

// lwrcase chars start at 97 in browser character set, function randomly selects from chars 97 + (0 to 25)
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// uprcase chars start at 65
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// nums start at 48
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function draws from my own symbol character set provided here
function getRandomSymbol() {
    const symbols = '!@#$%^&*()-_=+[]{}'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// Password Generator concatenates the correct amount of random characters into a password
function generatePassword() {
    var password = '';
    var passwordText = document.getElementById("password");
        
    while(1) {
        if (passwordArr[1]) {
            getRandomLower();
            password += getRandomLower();
        };

        if (password.length === passwordArr[0]) {
            break;
        };

        if (passwordArr[2]) {
            getRandomUpper();
            password += getRandomUpper();
        };

        if (password.length === passwordArr[0]) {
            break;
        };

        if (passwordArr[3]) {
            getRandomNumber();
            password += getRandomNumber();
        };

        if (password.length === passwordArr[0]) {
            break;
        };

        if (passwordArr[4]) {
            getRandomSymbol();
            password += getRandomSymbol();
        };

        if (password.length === passwordArr[0]) {
            break;
        };
    };
    passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria);