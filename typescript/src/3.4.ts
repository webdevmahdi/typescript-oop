{
    //

    class Animal {
        name: string;
        species: string
        constructor(name: string, species: string){
            this.name = name,
            this.species = species
        }
        makeSound(){
            console.log("I'm making sound")
        }
    }
    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }
        ghew(){
            console.log('Ghew ghew');
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }
        meaw(){
            console.log('Meawwwwwwwwww');
        }
    }
    
    let isDog = (name: Animal) : name is Dog => {
        return name instanceof Dog;
    }
    let isCat = (name: Animal) : name is Cat => {
        return name instanceof Cat;
    }
    let getAnimal = (name: Animal) => {
        if(isDog(name)){
            name.ghew()
        }
        else if(isCat(name)){
            name.meaw()
        }
        else{
            name.makeSound();
        }
    }
    let dog = new Dog('German shepard', 'Dog');
    let cat = new Cat('Parsian Cat', 'Cat');
    getAnimal(cat)
    getAnimal(dog)


    // class Animal {
    //     name: string;
    //     species: string
    //     constructor(name: string, species: string){
    //         this.name = name,
    //         this.species = species
    //     }
    //     makeSound(){
    //         console.log("I'm making sound")
    //     }
    // }
    // class Dog extends Animal {
    //     constructor(name: string, species: string){
    //         super(name, species)
    //     }
    //     ghew(){
    //         console.log('Ghew ghew');
    //     }
    // }
    // class Cat extends Animal {
    //     constructor(name: string, species: string){
    //         super(name, species)
    //     }
    //     meaw(){
    //         console.log('Meawwwwwwwwww');
    //     }
    // }
    // let getAnimal = (name: Animal) => {
    //     if(name instanceof Dog){
    //         name.ghew()
    //     }
    //     else if(name instanceof Cat){
    //         name.meaw()
    //     }
    // }
    // let dog = new Dog('German shepard', 'Dog');
    // let cat = new Cat('Parsian Cat', 'Cat');
    // getAnimal(cat)
    // getAnimal(dog)








    //
}