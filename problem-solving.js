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
let factorial = 1;
for(let i = 10; i>=1; i--){
    let temp = factorial;
    factorial *= i;
    console.log(`${i} * ${temp} = ${factorial}`)
}