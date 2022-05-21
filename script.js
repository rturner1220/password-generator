// Assignment code here

// added all the symbols, number and alphabets in var chars
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = "!@#$~%^.+-&*()";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var randomChar = function (charset) {
  char = charset.charAt(Math.floor(Math.random()*charset.lenght));
  return char;
};

 //Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
 window.alert("Let's create your password!");
 return password;
}
var setPaswordLengh = function () {
 //lenght at least 8 characters ans no more than 128 characters
var input = window.prompt("Enter a number between 8 and 128 to set your new password");
while(!input || input<8 || input>128) {
 window.alert("Enter a valid number.");
}
console.log("Password length set to:"+input);
return input;
}

// Criteria password
var setCriteria = function () {
  var criteria = {
    upperCase: false,
    lowerCase: false,
    numeric: false,
    specialCharacters: false,
  };

// confirm whether or not to include characters
criteria.upperCase = yesOrNoPrompt("Should the password include uppercase? Y/N");
criteria.lowerCase = yesOrNoPrompt("Should the password include lowercase? Y/N");
criteria.numeric = yesOrNoPrompt("Should the password include numbers? Y/N?");
criteria.specialCharacters = yesOrNoPrompt("Should the password include special Characters? Y/N")

console.log(criteria);

return criteria;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






