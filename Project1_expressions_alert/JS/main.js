var A= "this is a string";
var Family= "The Arezzinis", Dad = "Jeremiah", Mom = " hermoine",
    Daughter = "Penny", Son ="Zorro";

alert("Hello!");

var blues ="I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);
document.write("\n\n")


function My_First_Function(){
    var str = "This text is green!";
    var result = str.fontcolor ("green");//this is the font color green
    document.getElementById("Green_Text").innerHTML = result;
}

function myFunction() {
    var senctence = "I am learning";//this is a variable sentence
    secntence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

var str1 ="Hello ";
var str2 ="World!";
var result = str1.concat(str2); //This combines the two to create "Hello World!"
document.write(result);