"use strict";
{
    //
    // class Vehicle {
    //     name: string;
    //     age: number;
    //     engine: string
    //     constructor (name: string, age: number, engine: string){
    //         this.name = name,
    //         this.age = age,
    //         this.engine = engine
    //     }
    // }
    // let ferrari = new Vehicle("Ferrari-128", 134, "HP-240")
    // console.log(ferrari)
    class Animal {
        constructor(name, type, age) {
            this.name = name;
        }
        myDog() {
            console.log(this.name);
        }
    }
    let dog = new Animal('Tommy', "German shepard", 6);
    console.log(dog.myDog());
    //
}
