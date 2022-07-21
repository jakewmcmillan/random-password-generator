// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here

  var userChoice1 = window.prompt("Choose password length between 8 and 128 characters:");

  var userChoice2 = window.prompt("Do you want your password to include lowercase letters y/n?");
  var userChoice3 = window.prompt("Do you want your password to include uppercase letters y/n?");
  var userChoice4 = window.prompt("Do you want your password to include numbers y/n?");
  var userChoice5 = window.prompt("Do you want your passwrod to include special characters y/n?");

  var index = Math.floor(Math.random() * password.length);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
