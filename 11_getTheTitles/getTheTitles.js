const getTheTitles = function(dict) {
    let newArr = [];
    for(let i = 0; i < dict.length;i++){
        newArr.push(dict[i].title)
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
