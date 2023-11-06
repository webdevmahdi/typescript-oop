"use strict";
{
    class User1 {
        startEngine() {
            console.log('Go to the sleep');
        }
        stopEngine() {
            console.log('Don"t make my angry');
        }
        move() {
            console.log('Go for a walk in morning');
        }
    }
    let user1 = new User1();
    user1.startEngine();
    /// Abstract
    class Student {
    }
    class NewStudent extends Student {
        startEngine() {
            console.log('Go out of my room');
        }
        stopEngine() {
            console.log('stay in my room');
        }
        move() {
            console.log('Here is everything');
        }
    }
    let student1 = new NewStudent();
    student1.startEngine();
    //
}
