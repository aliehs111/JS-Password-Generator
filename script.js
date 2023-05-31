// Assignment code here



const numericArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "|", ";", ":", ",", ".", "<", ">", "?"];

function getCriteria() {

  //Validating password password length and converting the string to number.  -------------------------
  let pwLength = Number(prompt("Please enter desired length of your password.  It must be between 8 and 128 characters"));

  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || null) {
    pwLength = Number(prompt("It must be a whole number between 8 and 128"));

  } else {
    alert("Thank you, your password will be " + pwLength + " characters long");


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

  return {
    pwLength, charTypenum, charTypeup, charTypelow, charTypespec
  }



}


//array for how many characters-----------I think this needs to be at the top with the other arrays

const lengthArray = []
for (let i = 8; i < 129; i++) {
  lengthArray.push(i)
}




//------------//

//password = generatePassword();
//document.getElementById("password").value = password;
//document.getElementById("generate").addEventListener('click', copyPassword);


function generatePassword() {
  let userCriteria = getCriteria()
  let pwarray = []
  for (let i = 0; i <= userCriteria.pwLength; i++) {
    if (userCriteria.charTypelow) {
      let char = getRandom(lowerArr)
      if (!pwarray.includes(char)) {
        pwarray.push(char)
      }
    }

    if (userCriteria.charTypeup) {
      let char = getRandom(upperArr)
      if (!pwarray.includes(char)) {
        pwarray.push(char)
      }
    }
    if (userCriteria.charTypenum) {
      let char = getRandom(numericArr)
      if (!pwarray.includes(char)) {
        pwarray.push(char)
      }
    }

    if (userCriteria.charTypespec) {
      let char = getRandom(specArr)
      if (!pwarray.includes(char)) {
        pwarray.push(char)
      }
    }

  }
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


