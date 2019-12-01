/* Generate random password */

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


function generate()
{
    var passwordLength = document.getElementById("length").value;
    var lowerChar = document.getElementById("lowerChar").checked;
    var upperChar = document.getElementById("upperChar").checked;
    var numChar = document.getElementById("numChar").checked;
    var specialChar = document.getElementById("specialChar").checked;
    var password = "";

    if(passwordLength >= 8 && passwordLength <= 128){
        for(var i = 0;i<passwordLength; i++){
            password = password + ChoosingChar(lowerChar,upperChar,numChar,specialChar);
        }

        document.getElementById('password').innerHTML = password;
    }
    else{
        document.getElementById('password').innerHTML = "Password must contain 8-128 characters.";
    }
}

function ChoosingChar(lowerChar, upperChar,numChar,specialChar)
{
    var charChoice = "";
    if(lowerChar === true){
        charChoice = charChoice + "var lowerCase";
    }
    if(upperChar === true){
        charChoice = charChoice + "var upperCase";
    }
    if(numChar === true){
        charChoice= charChoice + "var num";
    }
    if(specialChar === true){
        charChoice= charChoice + "var sym";
    }
    character = charChoice.charAt(Math.floor((Math.random() * charChoice.length)));
    return character;
}