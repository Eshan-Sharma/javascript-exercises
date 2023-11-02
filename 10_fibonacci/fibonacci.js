const fibonacci = function(num) {
    if(num<0){return "OOPS";}
    if(num===0){return 0;}
    let num1 = 1, num2 = 0;
    for(let i = 2; i <= num; i++){
        let nextNum = num1+num2;
        num2 = num1;
        num1 = nextNum;
    }
    return num1;
    // if(num<0){return "OOPS";}
    // return parseInt((1/(5**0.5))*((((1+(5**0.5))/2)**num) - (((1-(5**0.5))/2)**num)))
};

// Do not edit below this line((1+(5**0.5))/2)**num )
module.exports = fibonacci;
