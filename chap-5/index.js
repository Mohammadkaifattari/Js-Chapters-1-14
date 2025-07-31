//1 add
// var fri_num = +prompt("Frist Number for Addition")
// var sec_num = +prompt("Secound Number for Addition")
// var total = fri_num + sec_num
// document.getElementById("output").innerText = " Sum Of " + fri_num + " and " + sec_num + " is "+ total

// //2 sub
// var fri_num = +prompt("Frist Number For Subtraction")
// var sec_num = +prompt("Secound Number For Subtraction")
// var total = fri_num - sec_num
// document.getElementById("output2").innerText = " Sub Of " + fri_num + " and " + sec_num + " is "+ total

// //Mutiply
// var fri_num = +prompt("Frist Number For Multiply")
// var sec_num = +prompt("Secound Number For Multiply")
// var total = fri_num * sec_num
// document.getElementById("output3").innerText = " multiplay Of " + fri_num + " and " + sec_num + " is "+ total

// //divide
// var fri_num = +prompt("Frist Number For Divide")
// var sec_num = +prompt("Secound Number For Divide")
// var total = fri_num / sec_num
// document.getElementById("output4").innerText = " divide Of " + fri_num + " and " + sec_num + " is "+ total

//3
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
var value 
// c. Initialize the variable with some number.
var intail = ("5")
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.

// after increment is: 6”.
// f. Show the value of variable in your browser like “Value
document.getElementById("text").innerText = "Value after variable declaration is: " + value 
document.getElementById("text2").innerText= "Initial value: " + intail
intail++
document.getElementById("text3").innerText= "after increment is: " +intail
// g. Add 7 to the variable.
intail+=7
document.getElementById("text4").innerText= " value after addition is: " +intail
// i. Decrement the variable.
intail--
document.getElementById("text5").innerText="Value after decrement is: "+intail
// k. Show the remainder after dividing the variable’s value
// by 3.
intail=intail%3
document.getElementById("text5").innerText="The Reminder is " +intail

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output

// var cost=600
// var ticket=prompt("How Much Tickets???")
// var total=600*ticket
// document.getElementById("text5").innerText= "Total Cost To buy "+ticket+ " to the semenar is "+total+"PKR"

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var table=4
var times=1
var total=table*times
document.getElementById("table").innerText="Table Of 4"
document.getElementById("table1").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table2").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table3").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table4").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table5").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table6").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table7").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table8").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table9").innerText=table+"*"+times+"="+total
times++
var total=table*times
document.getElementById("table10").innerText=table+"*"+times+"="+total
times++
var total=table*times

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var c = 30;

// b. Convert it to Fahrenheit & output “30°C is 86°F”.
var fahrenheitFromCelsius = (c * 9/5) + 32;
document.getElementById("ctof").innerText = c + "°C is " + fahrenheitFromCelsius + "°F";

// c. Now store a Fahrenheit temperature into a variable.
var f = 86;

// d. Convert it to Celsius & output “86°F is 30°C”.
var celsiusFromFahrenheit = (f - 32) * 5/9;
document.getElementById("ftoc").innerText = f + "°F is " + celsiusFromFahrenheit + "°C";

// a. Price of item 1
var item1=600
// b. Price of item 2
var item2=500
// c. Ordered quantity of item 1
var quantity1=1

// d. Ordered Quantity of item 2
var quantity2=7
// e. Shipping charges
var Shippingc=200
var totl= +item1+item1*quantity2+Shippingc
document.getElementById("mart").innerText ="price of item 1 is "+item1+"\n"+"price of item 2 is "+item2

document.getElementById("mart1").innerText="Quantity Of item 2 is 7"+"\n Shipping Charges "+ Shippingc+"\n Total Cost Of Your Order is"+ totl
