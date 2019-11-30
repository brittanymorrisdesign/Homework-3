//Generate random password//

function generate() {

    var Length = document.getElementById("pwLength").value;
        // Length (must be between 8 and 128 characters)
        if (pwLength >= 8 && pwLength <= 128) {

        } else {
            alert("Length must be between 8 and 128 characters");
        return;
        }
    
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var sym = [ "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    var passwordCharset = " ";

    //DOM Elements
    const pwLength = document.getElementbyId("pwLength");  // User inputs password length
    const upperChar = document.getElementbyId("upperChar");
    const lowerChar = document.getElementbyId("lowerChar");
    const specialChar = document.getElementbyId("specialChar");
    const yourPw = document.getElementById("yourPW");  // Final password field
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");

        if (upperChar.checked) {
            passwordCharset += upperChar[i];
        }
        if (lowerChar.checked) {
            passwordCharset += lowerChar[i];
        }
        if (specialChar.checked) {
            passwordCharset += sepcialChar[i];
        }

     var password = " ";
     var randomNumber;

        for (i = 0; i < pwLength; i = i + 1) {
            randomNumber = Math.floor(Math.random() * passwordCharset.length);
            password += passwordCharset[randomNumber];
        }

        document.getElementById("passwordCharset").value = password;

        }

// Event Listener for Generate button
    document.getElementById("generate").addEventListener("click", password()) 
    document.getElementById("yourPw").innerHTML = "yourPw";

/* Copy Clipboard */

function copyPassword() {
   /* Get the text field */
   var copyText = document.getElementById("yourPw");
 
   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /*For mobile devices*/
 
   /* Copy the text inside the text field */
   document.execCommand("copy");
 }