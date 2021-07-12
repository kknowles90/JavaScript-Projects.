
function My_First_Function(){
    var str = "This text is green!";
    var result = str.fontcolor ("green");//this is the font color green
    document.getElementById("Green_Text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";//this is a variable sentence
    sentence += "a lot from this book!";//this is the addition to the variable
    document.getElementById("Concatenate").innerHTML = sentence;
}
