const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
  let arrSum = 0;
	for(let i = 0; i < array.length; i++){
    arrSum += array[i];
  }
  return arrSum;
};

const multiply = function(array) {
  arrMul = 1;
  for(let i = 0; i < array.length;i++){
    arrMul *= array[i];
  }
  return arrMul;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  if(num==0 || num==1){
    return 1;
  }
  fact = 1;
  for(let i = 1; i <= num; i++){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
