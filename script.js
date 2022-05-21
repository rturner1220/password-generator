// added all the symbols, number and alphabets in var chars
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$~%^.+-&*()";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function setPasswordLength() {
  //lenght at least 8 characters ans no more than 128 characters
  var input = window.prompt("Enter a number between 8 and 128 to set your new password");
  if(!input || isNaN(input) || input < 8 || input>128) {
    window.alert("Enter a valid number.");
  }
  console.log("Password length set to:"+input);

  return parseInt(input);
}

function yesOrNoPrompt(msg) {
  var input = window.prompt(msg);

  if(!input || ['y', 'n'].indexOf(input.toLowerCase()) < 0) {
    window.alert("Enter yes or no.");
  }

  return input.toLowerCase() === 'y';
}




function generatePassword() {
  window.alert("Let's create your password!");

  // set pwd length
  var pwdLength = setPasswordLength();

  // set character types
  var typesCriteria = setCriteria();
  var characters = "";

  if (typesCriteria.upperCase) {
    characters += upperCase;
  }

  if (typesCriteria.lowerCase) {
    characters += lowerCase;
  }

  if (typesCriteria.numeric) {
    characters += numbers;
  }

  if (typesCriteria.specialCharacters) {
    characters += specialCharacters;
  }

  // generate pwd
  var password = "";

  for (var i = 0; i < pwdLength; ++i) {
    password += randomChar(characters);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// click btn to generate pwd
function bindClickEvent() {
  //Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}

bindClickEvent();
