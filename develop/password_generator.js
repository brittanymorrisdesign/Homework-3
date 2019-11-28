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


            const isLowercase = prompt('do you want lowercase');







//generate random password//

function generate() {
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var sym = [ "!", """, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    
    var userAnswer = prompt("How many characters would you like your password to contain?");
        
    // Length (must be between 8 and 128 characters)
    if (userAnswer >= 8 && userAnswer <= 128) {
    console.log("yes")
    }
    else {
        console.log("no")
    }

    generate()


    var userAnswer = prompt("Would you like to have numeric characters?");
    // Must have numeric characters
    if (userAnswer   xxxxxxxxxx            ) {
    console.log("yes") 
    }   
    else {
        console.log("no")
    }

    generate()
    
  
    var userAnswer = prompt("Would you like to include lowercase characters?");
    // Must have Lowercase characters
    if (userAnswer   xxxxxxxxxx            ) {
    console.log("yes") 
    }   
    else {
        console.log("no")
    }

    generate()
    

    var userAnswer = prompt("Would you like to include uppercase characters?");
// Must have Uppercasse characters
    if (userAnswer   xxxxxxxxxx            ) {
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




