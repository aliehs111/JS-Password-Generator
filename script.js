// Assignment code here

//Validating password password length-------------------------

let pwLength = Number(prompt("Please enter desired length of your password.  It must be between 8 and 128 characters"));

if (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || null) {
  prompt("It must be a whole number between 8 and 128")
} else {
  prompt("Thank you, your password will be " + pwLength + " characters long");
}

//Validating if user wants numeric characters-----------------
let charTypenum = confirm("Would you like to include numeric characters? Click OK for yes or Cancel for no");

if (charTypenum == true) {
  alert("Password will include numeric characters");
} else { 
  alert("Password will NOT include numeric characters")
}

//Validating if user wants uppercase letters------------
let charTypeup = confirm("Would you like to include uppercase letters? Click OK for yes or Cancel for no");
if (charTypeup == true) {
  alert("Password will include uppercase letters");
} else { 
  alert("Password will NOT include uppercase letters")
}

//validating if user wnts lowercase letters-------------
let charTypelow = confirm("Would you like to include lowercase letters? Click OK for yes or Cancel for no");
if (charTypelow == true) {
  alert("Password will include lowecase letters");
} else { 
  alert("Password will NOT include lowercase letters")
}

//Validating if user wants special characters---------------
let charTypespec = confirm("Would you like to include special characters? Click OK for yes or Cancel for no");
if (charTypespec == true) {
  alert("Password will include special characters");
} else { 
  alert("Password will NOT include special characters")
}



//Get variable values to console log-------------
console.log(pwLength)
console.log(charTypenum)
console.log(charTypeup)
console.log(charTypelow)
console.log(charTypespec)
  
//------------//

password = generatePassword();
document.getElementById("password").value = password;
document.getElementById("generate").addEventListener('click', copyPassword);

function generatePassword() {
  var charType = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()_+-=[]\{}|;:",./<>?'
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


