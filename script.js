// Assignment code here
let criterialong = prompt ("please enter how many characters your password will be")
if (criterialong !=null) {
    console.log(criterialong)
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


