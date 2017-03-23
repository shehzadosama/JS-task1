/* 
Name     : Shehzad Osama
Roll No. : 6561
Batch    : 4.1 (Bright Section)
*/




// Question # 1

 var name = prompt("Please Enter your name: ");
alert("Hi, "+name);   




// Question # 2

var i=1;
var no =prompt("Enter a num to print it’s multiplication table");
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));
console.log(no + " * " + i + " = " +(no*i++));   


// Question # 3
var city = prompt("Please enter ur city:");
 if (city === "karachi") {
     alert("Welcome to the city of lights !!!");
}   

// Question # 4
var gender= prompt("Please enter ur gender:");
 if (gender === "male") {
     alert("Good Morning Sir");
} 
else if (gender === "female"){
  alert("Good Morning Ma'am");
}   

// Question # 5
var color= prompt("Please enter color:");
 if (color === "red") {
     alert("vehicles must stop");
} 
else if (color === "yellow"){
  alert("vehicles should get ready to move");
}   
else if (color === "green"){
  alert("vehicles can move now");
}   
else
{
    alert("Invalid Color");
}

// Question # 6
var maxAge= prompt("Please enter Max Age:");
var currentAge= prompt("Please enter Current Age:");
 if (currentAge<= maxAge) {
     alert("You are welcome");
}  
else {
    alert("You are not allowed");
}

// Question # 7
var fuel= prompt("Please enter Remaining Fuel:");

 if (fuel< 0.25) {
     alert("Please refill the fuel in your car");
}  
else
{
    alert("No need to refill the Fuel");
}

// Question # 8(a)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} 

// Question # 8(b)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} 

// Question # 8(c)
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} 

// Question # 8(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}   

// Question # 8(e)
if (true){
alert("True");
}
if (false){
alert("False");
} 

// Question # 8(f)
if("car" < "cat"){
alert("car is smaller than cat");
} 

// Question # 9
var sub1= +prompt("Please enter marks in Sub1:");
var sub2= +prompt("Please enter marks in Sub2:");
var sub3= +prompt("Please enter marks in Sub3:");
var totalMarks= prompt("Please enter Total marks:");
var marksObtained = sub1+sub2+sub3;
var per =  (marksObtained/totalMarks) * 100 ;
var grade;
var remarks;
if(per>=80)
{
grade = "A-one";
remarks = "Excellent";
}
else if(per>=70)
{
    grade = "A";
remarks = "Good";

}
else if(per>=60)
{
    grade = "B";
remarks = "You need to improve";

}
else if(per<60)
{
    grade = "Fail";
remarks = "Sorry";

}


console.log("Mark Sheet");
console.log("----------\n");
console.log("Total Marks    : " + totalMarks);
console.log("Marks Obtained : " + marksObtained);
console.log("Percentage     : " + per + "%");
console.log("Grade          : " + grade);
console.log("Remarks        : " + remarks);



// Question # 10

var name1 =prompt("Enter Name of Item 1");
var name2 =prompt("Enter Name of Item 2");
var price1 =+prompt("Enter Price of Item 1");
var price2 =+prompt("Enter Price of Item 2");
var qty1 =+prompt("Enter ordered quantity of Item 1");
var qty2 =+prompt("Enter ordered quantity of Item 2");
var shipCharges = 250;
var totalCost = shipCharges +(price1 * qty1)  + (price2 * qty2); 
var discount =0;
if(totalCost > 2000)
{
    discount = (10/100) * totalCost; 
}
console.log("SHOPPING CART");
console.log("-------------\n\n");
console.log("Price of " + name1 + " is Rs." +  price1);
console.log("Quantity of " + name1 + " is " +  qty1);
console.log("Price of " + name2 + " is Rs." +  price2);
console.log("Quantity of " + name2 + " is " +  qty2);
console.log("\n");
console.log("Shipping Charges " + shipCharges);
console.log("\n");
console.log("Total Cost of Your Order is " + totalCost + " PKR");
 console.log("Discounted Price is " + (totalCost - discount) + " PKR");

// Question # 11

var secret =  7;
var input = +prompt("Enter num");
if(input === secret){
  alert(  "Bingo! Correct answer");
}
else if(input === secret+1 || input === secret-1){
alert("Close enough to the correct answer");
}
else
{
    alert("Wrong Guess! Try Again");
}

// Question # 12

var input = +prompt("Enter any num");
var rem = input%3;
if(rem ===0)
{
     alert("Given Num is divisible by 3");
}
else
{
    alert("Not divisible by 3");
}

// Question # 13
var nameOfTeam1 = prompt("Enter name of Team1");
var nameOfTeam2 = prompt("Enter name of Team2");
var score1 = +prompt("Enter score of Team1");
var score2= +prompt("Enter score of Team2");

if(score1>score2)
{
    alert(nameOfTeam1 + " have Won the game");
}
else if(score2>score1)
{
    alert(nameOfTeam2 + " have Won the game");
}else if(score1 === score2)
{
    alert("Game Tie");
}


// Question # 14
var a = +prompt("Enter num");
var b = prompt("Enter String");
var c =prompt("Enter Boolean");
alert(a +" is a "+ typeof(a));
alert(b +" is a "+ typeof(b));
alert(c +" is a "+ typeof(c));

// Question # 15


var num = +prompt("Enter num");
var msg;
if(num%2 === 0)
{
    msg="Even num";
}
else
{
    msg = "ODD num";
}
alert(msg);


// Question # 16
var temp = +prompt("Enter temperature");
var msg;
if(temp > 40 )
{

 msg = "It is too hot outside.";
}

else if(temp > 30 )
{ msg="The Weather today is Normal.";
}


else if(temp > 20 ){
 msg="Today’s Weather is cool.";
}

else if(temp > 10) {
msg= "OMG! Today’s weather is so Cool.";
}
alert(msg);


// Question # 17
var num1 = +prompt("Enter first num");
var num2 = +prompt("Enter second num");
var op  = prompt("Enter Operator (+,-,/,*)");
var msg;
var ans;
if(op ==="+")
{
    ans= num1+num2;
}
else if(op ==="-")
{
    ans= num1-num2;
}
else if(op ==="*")
{
    ans= num1*num2;
}
else if(op ==="/")
{
    ans= num1/num2;
}
alert(num1 +" "+op+ "" + num2 +" is " +ans);

// Question # 18
var day = prompt("Enter Day");
var msg;
if(day === "monday" || day ==="tuesday" || day ==="wednesday" || day ==="thursday" || day ==="friday")
{
msg = "It's a Week day";
}
else if(day ==="saturday")
{
    msg= "It's a weekend";
}
else if(day ==="sunday")
{
    msg= "Yay! It’s a holiday";
}
alert(msg);

// Question # 19
var score = +prompt("Enter Your score");
var msg;
if(score >50 ){
msg = "You are passed";
}
else{
    msg= "Try Again";
}
alert(msg);


// Question # 20

var num1 = +prompt("Enter first num");
var num2 = +prompt("Enter second num");
var msg;
if(num1 === num2){
msg = "both numbers are Equal";
}
else if(num1 > num2){
    msg= "The greater number of " +num1+ " and " +num2+ "is "+num1;
}
else if(num2 > num1){
    msg= "The greater number of " +num1+ " and " +num2+ " is "+num2;
}

alert(msg);

// Question # 21
var word = "Hello World";
var lang = prompt("Enter Language (en / es /de");
var msg;
if(lang ==="en"){
msg = "Hello World";
}
else if(lang ==="es"){
msg = "Hola Mundo";
}
else if(lang ==="de"){
msg = "Hallo Welt";
}
else{
    msg="invalid langauge entered";
}
alert(msg);

// Question # 22
var num = +prompt("Enter a num");
var msg;

if(num > 0){
    msg= "Positive num";
}
else    
{ msg= "Negative num";
}
alert(msg);

// Question # 23
var num = prompt("Enter a num");
var noun = prompt("Enter a noun");
var msg;
if(num>1){


msg=num +" " +noun+ "s";
}
else if(num ==1){
msg=num +" " +noun;
}
alert(msg);
