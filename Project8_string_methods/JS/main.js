function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);//J is 27, 33 is y. so it will take Johnny
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method(){
    var X = 182;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

function Precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);//10 for deci places.
}

function full_Sentence(){
    var part1= "I have ";
    var part2= "made this ";
    var part3="into a complete ";
    var part4="sentence.";
    var whole_sentence= part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}