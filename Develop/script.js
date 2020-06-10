// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt the user Asking how many characters they want their password to be. Needs to be between 8-128 characters, if not throw error. 

var passwordLength = prompt("How many characters do you want your password to be?");
console.log(passwordLength);
if (passwordLength<8 && passwordLength>128){
  throw "Please choose a password length between 8 and 128 characters";
  
  // Then use a bunch of confirms for the requirements that they want for their random password(lowercase,uppercase,numeric,special chars).
}else{
var useLowercase = confirm("Do you want to have lowercase letters in your password? (Ok = yes and cancel = no)");
var useUppercase = confirm("Do you want to have uppercase letters in your password?");
var useNumbers = confirm("Do you want to have numbers in your password?");
var useSpecialChars = confirm("Do you want to have special characters in your password?");



console.log("LOWERCASE CHECK: " + useLowercase);
console.log("UPPERCASE CHECK: " + useUppercase);
console.log("NUMBER CHECK: " + useNumbers);
console.log("SPECIAL CHARS CHECK: " + useSpecialChars);



















}








// 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
