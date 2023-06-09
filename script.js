// Assignment code here



const numericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "|", ";", ":", ",", ".", "<", ">", "?"];
let charValid = []

function getCriteria() {

  //Validating password password length and converting the string to number-------------------------
  let pwLength = Number(prompt("Please enter desired length of your password.  It must be between 8 and 128 characters"));

  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || null) {
    pwLength = Number(prompt("It must be a whole number between 8 and 128"));
  }
  alert("Thank you, your password will be " + pwLength + " characters long");
  console.log(pwLength)

  //Validating if user wants numeric characters.  If true the array of numbers is added to validated characters array (charValid)-----------------
  let charTypenum = confirm("Would you like to include numeric characters? Click OK for yes or Cancel for no");
  if (charTypenum === true) {
    alert("Password will include numeric characters");
    charValid = charValid.concat(numericArr);
    console.log(charValid);
  } else {
    alert("Password will NOT include numeric characters");
  }
  

  //Validating if user wants uppercase letters.  If true the array of upperclass letters is added to validated characters array (charValid)------------
  let charTypeup = confirm("Would you like to include uppercase letters? Click OK for yes or Cancel for no");
  if (charTypeup === true) {
    alert("Password will include uppercase letters");
    charValid = charValid.concat(upperArr)
    console.log(charValid);
  } else {
    alert("Password will NOT include uppercase letters");
  }
  

  //validating if user wnts lowercase letters. If true the array of lowerclass letters is added to validated characters array (charValid)------------
  let charTypelow = confirm("Would you like to include lowercase letters? Click OK for yes or Cancel for no");
  if (charTypelow === true) {
    alert("Password will include lowecase letters");
    charValid = charValid.concat(lowerArr);
    console.log(charValid);
  } else {
    alert("Password will NOT include lowercase letters");
  }
  

  //Validating if user wants special characters.  If true the array of speical characters is added to the validated characters array (charValid)---------------
  let charTypespec = confirm("Would you like to include special characters? Click OK for yes or Cancel for no");
  if (charTypespec === true) {
    alert("Password will include special characters");
    charValid = charValid.concat(specArr);
    console.log(charValid);
  } else {
    alert("Password will NOT include special characters");
  }
  

  //Validating if user chooses no character types.  If all prompts for character type were answered no (false) the validated characters array would be empty alert and start over.
  if (charTypenum == false && charTypeup == false && charTypelow == false && charTypespec == false) {
    alert("You chose no character types. Please click ok then click the red button to start over")
  }

  //Get variable values to console log showing true or false-------------

  console.log(charTypenum)
  console.log(charTypeup)
  console.log(charTypelow)
  console.log(charTypespec)

  return {
    pwLength, charTypenum, charTypeup, charTypelow, charTypespec
  }
}

//------------//

function generatePassword() {
  let userCriteria = getCriteria()
  let pwarray = []

  for (let i = 1; i <= userCriteria.pwLength; i++) {

    pwarray.push(getRandom(charValid))
  }

  console.log(pwarray)
  return pwarray.join("")

}

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
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
