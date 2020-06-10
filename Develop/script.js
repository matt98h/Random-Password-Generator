// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt the user Asking how many characters they want their password to be. Needs to be between 8-128 characters, if not throw error. 

var passwordLength = prompt("How many characters do you want your password to be?");
console.log(passwordLength);
if (passwordLength>8 && passwordLength<129){
  var useLowercase = confirm("Do you want to have lowercase letters in your password? (Ok = yes and cancel = no)");
var useUppercase = confirm("Do you want to have uppercase letters in your password?");
var useNumbers = confirm("Do you want to have numbers in your password?");
var useSpecialChars = confirm("Do you want to have special characters in your password?");



console.log("LOWERCASE CHECK: " + useLowercase);
console.log("UPPERCASE CHECK: " + useUppercase);
console.log("NUMBER CHECK: " + useNumbers);
console.log("SPECIAL CHARS CHECK: " + useSpecialChars);
/* We need to genreate a password utilizing random number, character, and special character generators. We do that by first selecting which random generator we are going 
  to use.(only use generators based off of what user selected in our confirms) and we loop creating random numbers until we reach the length specified by the user.
*/
  
  // making character sets based off of how the user responds to our confirm statements
  var charsetLowercaseOnly = "abcdefghijklmnopqrstuvwxyz"
  var charsetUpperCaseOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charsetNumbersOnly = "0123456789"
  var charsetspecialCharsOnly = " !@#$%^&*()-_+=[]\|?/>.<,`~;:{}"

  
  
  // Then use a bunch of confirms for the requirements that they want for their random password(lowercase,uppercase,numeric,special chars).
}else{
  alert("Oops! Please refresh the page and pick a length between 8 and 128.");
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
