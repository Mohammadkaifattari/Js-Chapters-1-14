// Page 1 of 4
// 1. Write a program to take “city” name as input from user.
//  If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city=prompt("Put The City Name.")
// if (city.toUpperCase("KARACHI")) {
//     alert("Wellcome To City Of Lightes")

// }

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir.
//  If the user is female, give the message: Good Morning Ma’am.

// var Gender=prompt("Put Your Gender.")
// if (Gender==="male") {alert(" Good Morning Sir")

// }
// else{alert(" Good Morning Ma’am")}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color
// Message Red Must Stop
// Yellow
// Ready to move Green Move now
// var color=prompt("Enter Traffic Light Colour.")
// if (color==="red") {alert("Red Must Stop")

// }  else
// if (color==="green") {alert("Move now")}

// else{ alert("Ready to move")}

// 4. Write a program to take input remaining fuel in car (in litres) from user.
// If the current fuel is less than 0.25litres,
//  show the message “Please refill the fuel in your car”
// var fuel=prompt("How much fuel in ur car")
// if (fuel<0.25) {alert("Please refill the fuel in your car Please ")

// }

// 5. Run this script, & check whether alert message would be displayed or not.
//  Record the outputs.
// a. var a = 4; if (++a === 5)
//     { alert("given condition for variable a is true");
// b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
// d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// e. if (true){ alert("True"); } if (false){ alert("False"); }
// f. if("car" < "cat"){ alert("car is smaller than cat"); }
// a
// var a = 4;
// if (++a === 5) {
//     console.log("given condition for variable a is true");
// }

// // b
// var b = 82;
// if (b++ === 83) {
//     console.log("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13) { console.log("condition 1 is true"); }
// if (c === 13)    { console.log("condition 2 is true"); }
// if (++c < 14)    { console.log("condition 3 is true"); }
// if (c === 14)    { console.log("condition 4 is true"); }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     console.log("The cost equals");
// }

// // e
// if (true)  { console.log("True"); }
// if (false) { console.log("False"); }

// // f
// if ("car" < "cat") {
//     console.log("car is smaller than cat");
// }






// 6. Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:
// var obtained = +prompt("How Much Marks");
// var totalmarks = 300;
// var percentage = (obtained / totalmarks) * 100; // keep as number
// var remark;
// var grade;

// if (percentage >= 80) {
//     grade = "A-one";
//     remark = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remark = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remark = "You Need To Improve";
// }
// else {
//     grade = "Fail";
//     remark = "Sorry";
// }

// document.write(`Total marks: ${totalmarks} <br>
// Obtained marks: ${obtained} <br>
// Percentage: ${percentage.toFixed(2)} % <br>
// Grade: ${grade} <br>
// Remarks: ${remark}`);

// Guess game:
// Store a secret number(ranging from 1 to 10) in a variable.
//  Prompt user to guess the secret number.
//     a.If user guesses the same number, show “Bingo! Correct answer”.
// b.If the guessed number + 1 is the secret number,
//     show “Close enough to the correct answer”.

// var secretnum = 10;
// var guess = +prompt("Guess The Secret Number (1 to 10)");

// if (guess === secretnum) {
//     alert("Bingo! Correct answer");
// }
// else if (guess + 1 === secretnum) {
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Try again!");
// }

// 8. Write a program to check whether the given number is
//  divisible by 3. Show the message to the user if the number is divisible by 3.

// var put=+prompt("put ur number")
// if (put%3===0) {alert("YES ITS DIVISIBLE WITH 3")
    
// }else{alert("NO ITS CAN'T DIVISIBLE WITH 3")}


// // 9. Write a program that checks whether the given input is an even number or an odd number.
// var put=+prompt("put ur number")
// if (put%2===0) {alert("EVEN NUMBER")
    
// }else{alert("ODD NUMBER")}

// // 10. Write a program that takes temperature as input and shows a message based on following criteria 
// // a. T > 40 then “It is too hot outside.” 
// // b. T > 30 then “The Weather today is Normal.” 
// // c. T > 20 then “Today’s Weather is cool.” 
// // d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature=+prompt("input temprature")
// var massge;
// if (temperature>=40) {alert(massge="It is too hot outside.")
    
// }
// else if (temperature>=30) {alert(massge="The Weather today is Normal")
// }
// else if (temperature>=20) {alert(massge="Today’s Weather is cool")

// }

// else if (temperature>=10) {alert(massge="OMG! Today’s weather is so Cool")

// }
// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
//  a. First number
//   b. Second number 
//   c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

  var num1=+prompt("put num1")
  var num2=+prompt("put num2")
  var operator=promptto("+,-,*,/,%")
  if (operator==="+") {alert(num1+num2)
    
  }
  else if (operator==="-") {alert(num1-num2)
    
  }
   else
  if (operator==="*") {alert(num1*num2)
    
  }
   else
  if (operator==="/") {alert(num1/num2)
    
  }
   else
  if (operator==="%") {alert(num1%num2)
    
  }
