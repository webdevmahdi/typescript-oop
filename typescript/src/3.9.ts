{
    //
    interface User {
        startEngine() : void;
        stopEngine() : void;
        move() : void;
    }

    class User1 implements User {
        startEngine(): void {
            console.log('Go to the sleep');
        }
        stopEngine(): void {
            console.log('Don"t make my angry');
        }
        move(): void {
            console.log('Go for a walk in morning');
        }
    }
    let user1 = new User1()
    user1.startEngine()



/// Abstract

abstract class Student {
    abstract startEngine() : void;
    abstract stopEngine() : void;
    abstract move() : void;
}

class NewStudent extends Student {
    startEngine(): void {
        console.log('Go out of my room')
    }
    stopEngine(): void {
        console.log('stay in my room')
    }
    move(): void {
        console.log('Here is everything');
    }
}

let student1 = new NewStudent()
student1.startEngine()










    //
}