"use strict";
{
    //
    class Parson {
        constructor(name, age, address) {
            this.name = name,
                this.age = age,
                this.address = address;
        }
        sleep(sleepingHour) {
            console.log(`The student sleep ${sleepingHour} hour in a day`);
        }
    }
    class Student1 extends Parson {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Parson {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        sleep(sleepingHour) {
            console.log(`The teacher sleep ${sleepingHour} hour in a day`);
        }
        classTime(classHour) {
            console.log(`The teacher take class ${classHour} hour in a day`);
        }
    }
    let student1 = new Student1("Mahdi", 17, "Terokanda");
    let sleep = student1.sleep(8);
    let teacher = new Teacher("Mahdi", 17, "Terokanda", "Teacher");
    let teacherSleep = teacher.sleep(8);
    let takeClass = teacher.classTime(5);
    //
}
