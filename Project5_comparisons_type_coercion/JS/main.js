document.write("10" + 5);

function my_Function(){
    document.getElementById("Test").innerHTML = 0/0;
    //document.getElementById("Test").innerHTML = isNaN('This is a string');//this would be true
    //document.getElementById("Test").innerHTML = isNaN('007');//this would be false
}
document.write("\n2");
document.write(-3E310);
document.write("\n3");
document.write(10 < 2);
document.write("\n4");
document.write(10 > 2);

console.log(2 + 2);

document.write("\n5");
document.write(10 == 10);
document.write("\n6");
document.write(10 == 2);
document.write("\n7");
X= 10;
Y= 10;
Z= "10"
I= "Magnus"
J= "Magnus"
L= "False"
document.write(X == Y);
document.write("\n8");
document.write(X == Z);
document.write("\n9");
document.write(I == J);
document.write("\n10");
document.write(J == L);
document.write("\n11");
document.write( 5 > 2 && 10 > 4);
document.write("\n12");
document.write(5 > 10 && 10 > 4);
document.write("\n13");
document.write(5 > 10 || 10 > 4);
document.write("\n14");
document.write(5 > 10 || 10 > 20);

function not_function() {
    document.getElementById("Not").innerHTML = !(5 > 10);//will come up as true even if statement is false
}