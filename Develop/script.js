// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var UseUpperCase;
var UseLowerCase;
var UseNumbers;
var UseSpecialChars;
var i;
var password ="";


var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var letters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialChars ="!@#$%^&*()"






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword()
{
  var passLength= prompt ("Please choose a password length between 8 and 128 characters");  //verify the user enters correct numbers
  if (passLength < 8 || passLength > 129 ) 
  {
    alert ("that is not a valid number")
  }
  else if(isNaN(passLength)=== true) // verify only numbers are being entered
  {
    alert("numbers only plaease!")
  }
  else
  {
     UseUpperCase = confirm("Would you like to use uppercase letters in your password?"); //sets each statement to true or false based on user input
     UseLowerCase = confirm ("Would you like to use lowercase letters in your password?");
     UseNumbers = confirm("Would you like to use numbers in your password?");
     UseSpecialChars = confirm("Would you like to use special characters in your password?");
  }

  if(UseUpperCase !== true && UseLowerCase !== true && UseNumbers !== true && UseSpecialChars !== true)  //verify atleast one option is selected
  {
    alert("Must confirm atleast one option!");
  }

 ///////////////////////////////All True Statements

  if(UseUpperCase === true && UseLowerCase === true && UseNumbers === true && UseSpecialChars == true)  //all true
  {
  var useChars = upper + letters + numbers + specialChars; //adds all strings together
  for ( var i = 0; i < passLength; i++) {                   // user input password length determines length of password
    password += useChars[Math.floor(Math.random() * useChars.length)]; //using math.random to access a random variable in my newly created array

  }
  return password; //returns password to the webpage
  }
/////////////////////////////////////// run if 3 true statements

  if(UseUpperCase !== true && UseLowerCase === true && UseNumbers === true && UseSpecialChars == true)  //3 true lower, numbers,specialchar
  {
  var useChars = letters + numbers + specialChars;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
    return password;
  }

  
  if(UseUpperCase === true && UseLowerCase !== true && UseNumbers === true && UseSpecialChars == true)  //3 true upper, number, specialchar
  {
  var useChars = upper + numbers + specialChars;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
    return password;
  }

  
  if(UseUpperCase === true && UseLowerCase === true && UseNumbers !== true && UseSpecialChars == true)  //3 true upper, lower, specialchars
  {
  var useChars = letters + upper + specialChars;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
    return password;
  }
  if(UseUpperCase === true && UseLowerCase === true && UseNumbers === true && UseSpecialChars !== true)  //3 true upper, lower, num
  {
  var useChars = upper + letters + numbers;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }
///////////////////////////////////////////////////////// run if 2 true statements///////////////////

if(UseUpperCase === true && UseLowerCase === true && UseNumbers !== true && UseSpecialChars !== true)  //2 true upper , lower
  {
  var useChars = upper + letters;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }

  if(UseUpperCase === true && UseLowerCase !== true && UseNumbers === true && UseSpecialChars !== true)  // 2 true upper, num
  {
  var useChars = upper  + numbers;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }

  if(UseUpperCase === true && UseLowerCase !== true && UseNumbers !== true && UseSpecialChars === true)  //2 true upper, specialChars
  {
  var useChars = upper + specialChars;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }

  if(UseUpperCase !== true && UseLowerCase === true && UseNumbers === true && UseSpecialChars !== true)  //2 true lower, numbers
  {
  var useChars =  letters + numbers;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }

  if(UseUpperCase !== true && UseLowerCase === true && UseNumbers !== true && UseSpecialChars === true)  //2 true lower, specialchars
  {
  var useChars =letters + specialChars;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }
  
  if(UseUpperCase !== true && UseLowerCase !== true && UseNumbers === true && UseSpecialChars === true)  //2 true num, specialchars
  {
  var useChars =numbers + specialChars;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }

///////////////////////////////run if only 1 true statement 
if(UseUpperCase === true && UseLowerCase !== true && UseNumbers !== true && UseSpecialChars !== true)  //only uppercase 
  {
  var useChars = upper;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }

  if(UseUpperCase !== true && UseLowerCase === true && UseNumbers !== true && UseSpecialChars !== true)  //only lowercase
  {
  var useChars = letters;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }

  if(UseUpperCase !== true && UseLowerCase !== true && UseNumbers === true && UseSpecialChars !== true)  //only numbers
  {
  var useChars = numbers;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }
  if(UseUpperCase !== true && UseLowerCase !== true && UseNumbers !== true && UseSpecialChars === true)  //only special chars
  {
  var useChars =specialChars;
  for ( var i = 0; i < passLength; i++) {
    password += useChars[Math.floor(Math.random() * useChars.length)];

  }
  return password;
  }
}
