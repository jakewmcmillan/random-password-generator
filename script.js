// Assignment Code
var generateBtn = document.querySelector('#generate');

var passLength = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,
44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,
85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,
120,121,122,123,124,125,126,127,128];
var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","`","{","}","|","~"];

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here
  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var userChoice1 = window.prompt("Choose password length between 8 and 128 characters:");
  var userChoice2 = window.prompt("Do you want your password to include lowercase letters?");
  var userChoice3 = window.prompt("Do you want your password to include uppercase letters?");
  var userChoice4 = window.prompt("Do you want your password to include numbers?");
  var userChoice5 = window.prompt("Do you want your passwrod to include special characters?");

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
