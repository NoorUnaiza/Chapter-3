var age = 15; 
alert("I am " + age + " years old");

// Qno 3
var birthYear = 2008; 
document.write("My birth year is " + birthYear);

// qno 4

var visitorName = " John Doe"; 
var productTitle = "T-shirt"; 
var quantity = 5; 


document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// QNO 2

var visitCount = localStorage.getItem('visitCount');


if (visitCount === null) {
    visitCount = 1;
}

// Increment the visit count
visitCount++;


localStorage.setItem('visitCount', visitCount);


alert("You have visited this site " + visitCount + " times");