function my_Dictionary() {
    var Animal = {
        species: "Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;//deleted Bark!
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//should come out undefined.
    }
