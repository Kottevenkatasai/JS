// marks = prompt("enter  marks")
// if(marks >80){
//     console.log("Grade A")
// }
// else if(marks>=60){
//     console.log("Grade B")
// }
// else if(marks>=40){
//     console.log("Grade C")

// }
// else{
//     console.log("Fail")
// }







// Use a switch case to print the day name when given a number (1–7).
// switch(7){
//     case 1:
//         console.log("sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//          break;
//     case 4:
//         console.log("wednesday")
//          break;
//     case 5:
//         console.log("Thursday")
//          break;
//     case 6:
//         console.log("Friday")
//          break;
//     case 7:
//         console.log("Saturday")
//          break;
        
// }





// question : Create a simple calculator using switch case (add, sub, mul, div).

// num1 = parseFloat(prompt("Enter first number: "));
// num2 = parseFloat(prompt("Enter second number: "));
// operator = prompt("Enter operation (+, -, *, /): ");

// switch (operator) {
//   case '+':
//     console.log( num1 + num2)
//     break;
//   case '-':
//     console.log(num1 - num2)
//     break;
//   case '*':
//     console.log(num1 * num2)
//     break;
//   case '/':
//     if (num2 !== 0)
//       console.log(num1 / num2)
//     else
//       console.log("Error: Division by zero is not allowed");
//     break;
//   default:
//     console.log("Invalid operator");
// }








// Using if...else if, check a person’s age group:

// below 13 → "Child"
// 13–19 → "Teen"
// 20–59 → "Adult"
// 60+ → "Senior"



// age = prompt("enter a age ")
// if(age<13){
//     console.log("Child")
// }
// else if (age>=13 && age<=19){
//     console.log("Teen")
// }
// else if (age>=20 && age <=59){
//     console.log("Adult")
// }
// else if (age>=60){
//     console.log("Senior")
// }



// Quetion : Use switch to print a message for traffic light colors (red → stop, yellow → wait, green → go).

// switch('black'){
//     case 'red':
//         console.log("Stop")
//         break;
//     case 'yellow':
//         console.log("Wait")
//         break;
//     case 'green':
//         console.log("Go")
//         break;
//     default:
//         console.log("please enter valid color")
// }












// / let a = 0;
// if (a) console.log("Truthy");
// else console.log("Falsy");



// let value = null ?? "default";
// console.log(value);




// let x;
// let y = x ?? 10;
// console.log(y);




// let name = "";
// console.log(name || "Guest");
// console.log(name ?? "Guest");





// let n = NaN;
// if (n) console.log("True");
// else console.log("False");




// function test() {
//   var x = 10;
//   if (true) {
//     var x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// test();





// function example() {
//   let y = 5;
//   if (true) {
//     let y = 10;
//     console.log(y);
//   }
//   console.log(y);
// }
// example();




// function run() {
//   if (true) {
//     var a = 100;
//     let b = 200;
//     const c = 300;
    
//   }
//   console.log(a);
//   console.log(typeof b);
// }
// run();






// var x = 1;
// function outer() {
    
//   console.log(x);
//   var x = 2;
// }
// outer();









// let x = 10;
// {
//   let x = 20;
//   {
//     let x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// console.log(x);
