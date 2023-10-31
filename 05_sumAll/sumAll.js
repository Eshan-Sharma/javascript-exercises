const sumAll = function(numOne, numTwo) {
    let total = 0;
    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo)){
        return "ERROR";
    }
    if((numOne<0||numTwo<0)){
        return "ERROR";
    }
    if(numOne>numTwo){
        let temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    }
    for(let i = numOne; i <= numTwo; i++){
        total +=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
