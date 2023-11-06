{
    //

    class Parson {
        name: string;
        age: number;
        address: string
        constructor(name: string, age: number, address: string) {
            this.name = name,
                this.age = age,
                this.address = address
        }

        sleep(sleepingHour: number) {
            console.log(`The student sleep ${sleepingHour} hour in a day`);
        }
    }

    class Student1 extends Parson {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    class Teacher extends Parson {
        designation : string
        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }
        sleep(sleepingHour: number) {
            console.log(`The teacher sleep ${sleepingHour} hour in a day`);
        }
        classTime(classHour: number) {
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