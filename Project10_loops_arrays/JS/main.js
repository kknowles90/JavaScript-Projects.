var Instruments = ["Guitar", "Drums", "piano", "Bass", "Violin"];
var content="";
var Y;
function for_Loop(){
    for (Y=0; Y < Instruments.length; Y++){
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function cat_pics(){
    var cat_picture = []; //creating array
    cat_picture[0]= "sleeping";//first element
    cat_picture[1]= "playing";
    cat_picture[2]= "eating";
    cat_picture[3]= "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_picture[1];

}

function constant_function(){
    const musical_Instrument = {type: "guitar", brand: "Fender", color:"black"};
    musical_Instrument.color = "blue";
    musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        musical_Instrument.type + " was " + musical_Instrument.price;
}

// const X = 10 would lock the X variable's value.

var X = 21;
document.write(X);//before let
{
    let X = 33;
    document.write("<br>"+ X);//after let so output will be 33
}
document.write("<br>"+ X);//out of let parameters so X is back to 21

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description : function {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("car_object").innerHTML = car.description();