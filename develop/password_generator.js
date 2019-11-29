// in html add
    // an input box that prompts for a length
    // a checkbox that prompts for
        // lowercase, specials, upercase, numbers
    // use generate button as submit

// in the js
    // add an event listenr to the gen button
    // when that button is clicked
        // grab the values of all thos html inputs
            // $('#lowercuase') document.querryselector('#lowercase')
        // store those in var
        // based on the values 
            // use some ungodly calculation to generate the password
                // take the length of the password and create a loop
                /*
                    for(var i = 0; i < choosenLen; i++) {
                        // inside that loop
                            if (wantsNum && wantsSpec) {
                                decrmetn = 2
                            } else if (wantsNumb || wantsspec)
                            {
                                decrement = 1;
                            }
                        for(var i = 0; i < (choosenLen - decrement); i++) {
                            // select a random letter from your array
                            // add that randome letter to a running string
                        }    
                        for(var i = 0; i < (ecrement); i++) {
                            // select a random letter from your array
                            // add that randome letter to a running string
                        }    
                    }
                */
        // display that in a text area
        // have a button that will copy to clipboard

//generate random password//

function generate() {
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var sym = [ "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
   
    var pwLength = document.getElementbyId("pwLengh");
    var upperChar = document.getElementbyId("upperChar");
    var lowerChar = document.getElementbyId("lowerChar");
    var specialChar = document.getElementbyId("specialChar");


    function generate() {
        userPassword = " ";
        passwordCharset = " ";

        // Length (must be between 8 and 128 characters)
        if (pwLength >= 8 && pwLength <= 128) {
            passwordCharset += pwLength;
        }
        if (upperChar.checked) {
            passwordCharset += upperChar;
        }
        if (lowerChar.checked) {
            passwordCharset += lowerChar;
        }
        if (specialChar.checked) {
            passwordCharset += sepcialChar;
        }

        pwLength = Number(lengthInput.value);

for (let i = 0; i < pwLength; i = 1+1) {
userPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length);

}

        var pwLength = parseInt(document.getElementbyId("userinput").value));
    }



  /* Copy Clipboard*/
  
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}











    submit.addEventListener("click"(function(e)) {

        var characters = char;
        (charNum.checked) ? characters += num: " ";
        (upperChar.checked) ? characters += num: " ";
        (lowerChar.checked) ? characters += num: " ";
        (sepcialChar.checked) ? characters += num: " ";
        yourPw.value = password (charNum.value, characters);
  
    });


    function createpassword() {
        var pwLength = parseInt(document.getElementbyId("userinput").value);
    }


    console.log("yes")
    }
    else {
        console.log("no")
    }

    generate()


   
    
    
//     var password = " ";

//     //create for loop to choose characters//
//     for(var i = 0); i < all.length; i = i +1);
//     password = password + all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1)));

// //Add password to text box//
// document.getElementById("generate").all = password




