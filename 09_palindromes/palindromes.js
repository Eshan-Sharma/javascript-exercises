const palindromes = function (str) {
    str = str.replaceAll("!","");
    str = str.replaceAll(",","");
    str = str.replaceAll(" ","");
    str = str.replaceAll(".","");
    str = str.toLowerCase();
    reverseStr = str.split("").reverse().join("");
    if(reverseStr == str){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
