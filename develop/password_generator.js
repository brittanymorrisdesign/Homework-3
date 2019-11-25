//generate random password//

function generate() {
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var sym = ["#", "$", "%", "&", """, "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "_", "|", "`", "{", "}", "~"];

    var userAnswer = prompt("How many characters would you like your password to contain?");

    if (userAnswer >= 8 && userAnswer <= 128) {
    console.log("yes")
    }
    else {
        console.log("no")

    }
}
   generate()


   userAnswer = prompt("How many characters would you like your password to contain?");
   console.log(userAnswer);


//     var all = lowerCase + upperCase + num + sym;
//     var password = " ";

//     //create for loop to choose characters//
//     for(var i = 0); i < all.length; i = i +1);
//     password = password + all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1)));

// //Add password to text box//
// document.getElementById("generate").all = password




