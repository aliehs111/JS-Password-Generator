// Assignment code here

//Validating password password length-------------------------
let pwLength = Number(prompt("Please enter desired length of your password.  It must be between 8 and 128 characters"));
if (pwLength <8 || pwLength >128) {
  prompt("It must be between 8 and 128 characters")
}

if (pwLength = isNaN) {
  prompt("Must be a whole number between 8 and 128")
}

CharTypen = prompt("Would you like to include numeric characters? Click OK for yes or Cancel for no");
if (CharTypen = true) {
  alert("Password will include numeric characters");
} else { 
  alert("Password will not include numeric characters")
}
  

result = confirm(charTypen)
charTypeu = prompt("Would you like to include uppercase letters? Click OK for yes or Cancel for no");
result = confirm(charTypeu)
charTypel = prompt("Would you like to include lowercase letters? Click OK for yes or Cancel for no");
result = confirm(charTypel)
charTypes = prompt("Would you like to include special characters? Click OK for yes or Cancel for no");
result = confirm(charTypes)

// conditional response for password length//


  
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


