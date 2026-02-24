// write a function that return even numbers only

function evenNumbersArray(numbers){
    let evens = [];
    for(const number of numbers){
        if(number%2===0){
            evens.push(number);
        }
    }
    return evens;
}

console.log(evenNumbersArray([1,2,3,4,5,6,7,8]));