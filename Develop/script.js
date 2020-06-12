// Assignment Code
var generateBtn = document.querySelector("#generate");
function writePassword(){
  // set password equal to the value of our generated password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.textContent = password;
  
}
// all of the variables for our character sets
var charsetLowercaseOnly = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var charsetUppercaseOnly = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var charsetNumbersOnly = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var charsetspecialCharsOnly = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '\',', '?', '/', '>', '.', '<', '`', '~', ';', ':', '{', '}'];
// Prompt the user Asking how many characters they want their password to be. Needs to be between 8-128 characters, if not throw error. 
function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to be?");
  
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {

    alert("Oops! Please click Generate Password and pick a length between 8 and 128.");


    // Then use a bunch of confirms for the requirements that they want for their random password(lowercase,uppercase,numeric,special chars).
  } else {
    var useLowercase = confirm("Do you want to have lowercase letters in your password? (Ok = yes and cancel = no)");
    var useUppercase = confirm("Do you want to have uppercase letters in your password? (Ok = yes and cancel = no)");
    var useNumbers = confirm("Do you want to have numbers in your password? (Ok = yes and cancel = no)");
    var useSpecialChars = confirm("Do you want to have special characters in your password? (Ok = yes and cancel = no)");


    /* We need to genreate a password utilizing random number, character, and special character generators. We do that by first selecting which random generator we are going 
      to use.(only use generators based off of what user selected in our confirms) and we loop creating random numbers until we reach the length specified by the user.
    */

    



    // we say if none of them are true first because the rest we add based on their values for the confirms. If they choose none of them we can't create a password. 
    if (!useLowercase && !useUppercase && !useNumbers && !useSpecialChars) {
      alert("You must choose at least one of the categories.");
    } else {
      // here create an empty array and if the confirm returns true then add the corresponding charset to the empty array.
      var finalCharset = [];
      if (useLowercase) finalCharset = finalCharset.concat(charsetLowercaseOnly);
      if (useUppercase) finalCharset = finalCharset.concat(charsetUppercaseOnly);
      if (useNumbers) finalCharset = finalCharset.concat(charsetNumbersOnly);
      if (useSpecialChars) finalCharset = finalCharset.concat(charsetspecialCharsOnly);
      /* creating a for loop to count through our character set and pick random values based off of their index. Don't have to add one at the end of the random call because we are looking
        at the index of our final character set. Set password to empty and add the random characters until the loop completes. 
      */
      var generatedPassword = "";

      for (var i = 0; i <= passwordLength; i++) {
        var randomChar = finalCharset[Math.floor(Math.random() * finalCharset.length)]

        generatedPassword = generatedPassword + randomChar;

       
      }
    }
    return generatedPassword;
  }
}
generateBtn.addEventListener("click",writePassword);
console.log(window);
















