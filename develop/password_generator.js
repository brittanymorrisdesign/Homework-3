//generate random password//

function generate("length") {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var sym = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var all = lowerCase + upperCase + num + sym;
    var password = " ";

    //create for loop to choose characters//
    for(var i = 0); i < length; i = i +1);
    password = password + all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1)));

//Add password to text box//
document.getElementById("generate").all = password


}

return password;
