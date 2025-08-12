// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a=10
document.getElementById("a1").innerText= "The value of a is "+a
++a
document.getElementById("a2").innerText= "The value of ++a is "+a
document.getElementById("a3").innerText= "Now The value of a is "+a

document.getElementById("a4").innerText= "The value of a++ is "+ a++
document.getElementById("a5").innerText= "Now value of a is "+a
document.getElementById("a6").innerText= "The value of --a is "+ --a
document.getElementById("a7").innerText= "Now value of a is "+a
document.getElementById("a8").innerText= "The value of a-- is "+ a--
document.getElementById("a9").innerText= "Now value of a is "+a



// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
console.log(--a,
--a - --b,
--a - --b + ++b,
--a - --b + ++b + b--)

// 3. Write a program that takes input a name from user &
// greet the user.

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var times=1
var table=+prompt("Which Table You Want?")
var total=table*times
if (table) {
    



document.getElementById("table").innerText="Table Of " +table
document.getElementById("table1").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table2").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table3").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table4").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table5").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table6").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table7").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table8").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table9").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table10").innerText=table+" × "+times+" = "+total
times++}

else{var times=1
var table=5
var total=table*times
    document.getElementById("table").innerText="Table Of 5" 
document.getElementById("table1").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table2").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table3").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table4").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table5").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table6").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table7").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table8").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table9").innerText=table+" × "+times+" = "+total
times++
var total=table*times
document.getElementById("table10").innerText=table+" × "+times+" = "+total
times++}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
var sub1 = prompt("Write the 1st Subject");
var sub2 = prompt("Write the 2nd Subject");
var sub3 = prompt("Write the 3rd Subject");

var totalmarks = 100;

var obtainedof1 = Number(prompt("Bhai jan 1st subject ke kitne number liye???"));
var obtainedof2 = Number(prompt("Bhai jan 2nd subject ke kitne number liye???"));
var obtainedof3 = Number(prompt("Bhai jan 3rd subject ke kitne number liye???"));

var percentage1 = (obtainedof1 / totalmarks) * 100;
var percentage2 = (obtainedof2 / totalmarks) * 100;
var percentage3 = (obtainedof3 / totalmarks) * 100;

var totalObtained = obtainedof1 + obtainedof2 + obtainedof3;
var totalPossible = totalmarks * 3;
var full = (totalObtained / totalPossible) * 100;

// Update DOM
document.getElementById("sub1").innerText = sub1;
document.getElementById("obtaind1").innerText = obtainedof1;
document.getElementById("total1").innerText = totalmarks;
document.getElementById("percentage1").innerText = percentage1.toFixed(2) + " %";

document.getElementById("sub2").innerText = sub2;
document.getElementById("obtaind2").innerText = obtainedof2;
document.getElementById("total2").innerText = totalmarks;
document.getElementById("percentage2").innerText = percentage2.toFixed(2) + " %";

document.getElementById("sub3").innerText = sub3;
document.getElementById("obtaind3").innerText = obtainedof3;
document.getElementById("total3").innerText = totalmarks;
document.getElementById("percentage3").innerText = percentage3.toFixed(2) + " %";

document.getElementById("full").innerText = full.toFixed(2) + " %";
