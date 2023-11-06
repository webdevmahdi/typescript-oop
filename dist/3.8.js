"use strict";
{
    //
    class Parson {
        getSleep() {
            console.log(`He is sleep 8 hours a day`);
        }
    }
    class Student extends Parson {
        getSleep() {
            console.log(`He is sleep 7 hours a day`);
        }
    }
    class Developer extends Parson {
        getSleep() {
            console.log(`He is sleep 5 hours a day`);
        }
    }
    let getSleepHours = (param) => {
        param.getSleep();
    };
    let person = new Parson();
    let student = new Student();
    let developer = new Developer();
    getSleepHours(student);
    //
}
