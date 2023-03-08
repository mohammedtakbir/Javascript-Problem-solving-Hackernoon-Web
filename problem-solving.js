//* problem-01
//? Print numbers from 1 to 10
// let i = 1;
// while(i<11){
//     console.log(i)
//     i++;
// }
// for(let i = 1; i<=10; i++){
//     console.log(i)
// }

//* problem-02
//? print the odd numbers less than 100
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

//? another way
// for(let i = 1; i<101; i+=2){
//     console.log(i)
// }

//* problem-03
//? Print the multiplication table with 7
// let i = 1;
// while(i<=10){
//     const table = 7 * i;
//     console.log(`${7} X ${i} = ${table}`)
//     i++;
// }

//* problem-04
//? Print all the multiplication tables with numbers from 1 to 10
// let i = 1;
// while(i<=10){
//     generateTable(i);
//     i++;
// }
// function generateTable(num){
//     for(let i =1; i<=10; i++){
//         const table = num * i;
//         console.log(`${num} X ${i} = ${table}`);
//     }
// }

//* problem-05
//? Calculate the sum of numbers from 1 to 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum)

//* problem-06
//? Calculate 10!
// let factorial = 1;
// for(let i = 10; i>=1; i--){
//     let temp = factorial;
//     factorial *= i;
//     console.log(`${i} * ${temp} = ${factorial}`)
// }

//* problem-07
//? Calculate the sum of odd numbers greater than 10 and less than 30
// let sum = 0;
// for(let i = 10; i<=30; i++){
//     if(i % 2 !== 0){
//         const temp = sum;
//         sum += i;
//         console.log(`${i} + ${temp} = ${sum}`)
//     }
// }

//* problem-08
//? Create a function that will convert from Celsius to Fahrenheit
// function converter(celsius){
//     return (celsius * 1.8) +32
// }
// console.log(converter(25))

//* problem-09
//? Create a function that will convert from Fahrenheit to Celsius
// function converter(fahrenheit){
//     return (fahrenheit -32) * 5/9
// }
// console.log(converter(104))

//* problem-10
//? Calculate the sum of numbers in an array of numbers
// const arr = [25, 14, 74, 65, 83];

//? using forEach()
// let sum = 0;
// arr.forEach(num => sum+=num);
// console.log(sum)

//? using while loop
// let i = 0;
// while(i<arr.length){
//     sum += arr[i]
//     i++;
// }
// console.log(sum)

//* problem-11
//? Calculate the average of the numbers in an array of numbers
// function average(num) {
//     let sum = 0;
//     num.forEach(n => sum += n);
//     return sum / arr.length;
// }
// console.log(average(arr))

//* problem-12
//? Create a function that receives an array of numbers and returns an array containing only the positive numbers

// const arr = [-25, 257, 36, -37, 15, -95];

// function getNegativeNumbers(numbers) {
//     //? using filter()
//     return numbers.filter(n => n<0)
//     //? using forEach()
//     const NegativeNumbers = [];
//     numbers.forEach(n => {
//         if(n < 0){
//             NegativeNumbers.push(n)
//         }
//     });
//     return NegativeNumbers;

//     //? using for---of
//     for (const number of numbers) {
//         if (number < 0) {
//             NegativeNumbers.push(number)
//         }
//     }
//     return NegativeNumbers;
// }
// console.log(getNegativeNumbers(arr))

//* problem-13
//? Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function getPositiveNumbers(numbers) {
//     let positiveNumbers = [];
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] >= 0) {
//             positiveNumbers.push(numbers[i])
//         }
//     }
//     return positiveNumbers;
// }
// console.log(getPositiveNumbers(arr))

//* problem-14
//? Find the maximum number in an array of numbers
// const arr = [35, 15, 45, 85, 65, 95];
//? Math.max()
// console.log(Math.max(...arr))
// let maximum = arr[0];

//? forEach()
// arr.forEach(n => {
//     if (n > maximum) {
//         maximum = n;
//     };
// })
// console.log(maximum)

//* problem-15
//? Print the first 10 Fibonacci numbers without recursion
//? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811

// let arr = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     console.log(arr)
//     arr[i] = arr[i - 1] + arr[i - 2];
// }

//* problem-16
//? Create a function that will find the nth Fibonacci number using recursion

// function findFibonacci(n) {
//     if(n < 2){
//         return n;
//     }
//     return findFibonacci(n - 1) + findFibonacci(n - 2)
// }
// console.log(findFibonacci(7))

//* problem-17
//? Create a function that will return a Boolean specifying if a number is prime

// function checkPrimeNumber(num) {
//     if (num < 2) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
// console.log(checkPrimeNumber(-25))

//* problem-18
//? Calculate the sum of digits of a positive integer number
const positiveIntegerNumber = 357955;
// function sum(num) {
//     const digit = num.toString();
//     const digitArr = digit.split('');
//     let sum = 0;
//     for (const str of digitArr) {
//         sum += parseFloat(str)
//     }
//     return sum;
// }
// console.log(sum(positiveIntegerNumber))

// function sum(num) {
//     let sum = 0;
//     const str = num.toString();
//     for (const numStr of str) {
//         sum += parseFloat(numStr)
//     }
//     return sum;
// }
// console.log(sum(positiveIntegerNumber))

//* problem-19
//? Print the first 100 prime numbers

function prime(num) {
    let count = 0;
    let i = 0;
    while (count < num) {
        if (getPrimeNumber(i)) {
            console.log(i);
            count++;
        }
        i++;
    }
}
function getPrimeNumber(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

prime(100);