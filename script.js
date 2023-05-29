// Assignment code here

//Validating password password length-------------------------

const numericArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*","-", "+", "=", "|", ";", ":", ",", ".", "<",">", "?"];

function getCriteria () {


let pwLength = Number(prompt("Please enter desired length of your password.  It must be between 8 and 128 characters"));

if (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || null) {
  prompt("It must be a whole number between 8 and 128");
} else {
  prompt("Thank you, your password will be " + pwLength + " characters long");
 
  
}

console.log(pwLength)
  //this is not working to exclude if the user input does not meet criteria. it is always taking first user input even if prompted to choose again


//Validating if user wants numeric characters-----------------
let charTypenum = confirm("Would you like to include numeric characters? Click OK for yes or Cancel for no");

if (charTypenum == true) {
  alert("Password will include numeric characters");
} else { 
  alert("Password will NOT include numeric characters");
}

//Validating if user wants uppercase letters------------
let charTypeup = confirm("Would you like to include uppercase letters? Click OK for yes or Cancel for no");
if (charTypeup == true) {
  alert("Password will include uppercase letters");
} else { 
  alert("Password will NOT include uppercase letters");
}

//validating if user wnts lowercase letters-------------
let charTypelow = confirm("Would you like to include lowercase letters? Click OK for yes or Cancel for no");
if (charTypelow == true) {
  alert("Password will include lowecase letters");
} else { 
  alert("Password will NOT include lowercase letters");
}

//Validating if user wants special characters---------------
let charTypespec = confirm("Would you like to include special characters? Click OK for yes or Cancel for no");
if (charTypespec == true) {
  alert("Password will include special characters");
} else { 
  alert("Password will NOT include special characters");
}



//Get variable values to console log to check if working-------------

console.log(charTypenum)
console.log(charTypeup)
console.log(charTypelow)
console.log(charTypespec)
}
 
//arrays for criteria-----------

const lengthArray = [] 
for (let i = 8; i < 129; i++) {
  lengthArray.push(i)
}




//------------//

//password = generatePassword();
//document.getElementById("password").value = password;
//document.getElementById("generate").addEventListener('click', copyPassword);

//this function is not working 
function generatePassword() {
getCriteria ()






  var chars = numericArr + upperArr + lowerArr + specArr;
  var password = "";
  //if (charTypenum = true, charTypelow = true, charTypeup = true, charTypespec = true) // need to have a different function for every group of answers
  for (var i = 0; i <= pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * pwLength);
    password += chars.substring(randomNumber, randomNumber +1);
  } 

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


