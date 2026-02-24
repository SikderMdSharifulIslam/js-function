// objective: write a function to give me the sum of all numbers in an array

function sumOfNumbers(numbers){
    let sum = 0;
    numbers.forEach(element => {
        sum+=element;
    });
    return sum;
};

const nums = [1,2,3,4,5];
const sum = sumOfNumbers(nums);
console.log('sum of 5 number:', sum);