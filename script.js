// Assignment Code
var generateBtn = document.querySelector('#generate');



function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here
  var passLength = window.prompt ('How long would you like your password (8-128 charachters)?');
  if (passLength < 8) {
    return;
  }
  if (passLength > 128) {
    return;
  };
  var useUpper = window.confirm('Would you like to use uppercase letters in your password?');
  var useLower = window.confirm('Would you like to use lowercase letters in your password?');
  var useNumber = window.confirm('Would you like to use numbers in your password?');
  var useSpecial = window.confirm('Would you like to use special characters in your password?');
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
  var choices = [];

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
