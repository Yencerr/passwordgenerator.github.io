// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables used in password genereator proccess
function generatePassword() {
  var characertsUsed = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";  
  var characterPull = "";
  var completedPassword = "";

  // possible options to choose from when it comes to the character options
  var capitalWords = confirm("Would you like to include upper case letters included?");
  var lowercaseWords = confirm("Would you like to include lower case letters?");
  var numberOptions = confirm("Would you like to include numbers in you password?");
  var specialCharacters = confirm("Would you like to include special characters into you password including '!@#$%^&*()_+' ?");

  // Amount of characters selected by the user with slider tool
  let slider = document.getElementById("slidertool").value;

  document.getElementById("length").innerHTML = "Length: 128";

  //This is a step to set the length based on slider position the user sets
  document.getElementById("slidertool").oninput = function() {

    if(document.getElementById("slidertool").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slidertool").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

  }
  
    //Characters used when selected by the user  'upper case words'
    if (capitalWords === true) {
      var splicecapitalWords = characertsUsed.slice(0, 26);
      characterPull = characterPull.concat(splicecapitalWords);
      console.log(characterPull);
    }
    //Characters used when selected by user 'lower case words'
    if (lowercaseWords === true) {
      var splicelowercaseWords = characertsUsed.slice(26, 52);
      characterPull = characterPull.concat(splicelowercaseWords);
      console.log(characterPull);
    }
    //Characters used when selected by user 'Upper case words'
    if (numberOptions === true) {
      var splicenumberOptions = characertsUsed.slice(52, 62);
      characterPull = characterPull.concat(splicenumberOptions);
      console.log(characterPull);
    }
    //Characters used when selected by user 'Special Characters'
    if (specialCharacters === true) {
      var splicespecialCharacters = characertsUsed.slice(62, 91);
      characterPull = characterPull.concat(splicespecialCharacters);
      console.log(characterPull);
    }

    // Concatenating random characters from password pool and forming random password
    for (i = 0; i < slider; i++) {
      var randomcharacterPull = characterPull[Math.floor(Math.random() * characterPull.length)];
      var completedPassword = completedPassword.concat(randomcharacterPull);
    }
    
    function getCharacterLength (str) {
        return [...str].length;
      }

    console.log(getCharacterLength(completedPassword));
    
    return completedPassword; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// supposed to show number value that slider is placed on it was working, but something i have done has broken it.
var slider = document.getElementById("slidertool")
slider.addEventListener("input", function() {
  console.log(slider.value)
})
