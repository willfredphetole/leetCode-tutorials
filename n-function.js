var createCounter = function(currentValue){

    return function(){
        var valueToReturn = currentValue;
        currentValue++;
        return valueToReturn;
    };
};
const counter =  createCounter(10);

console.log(counter());