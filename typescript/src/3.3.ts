{
    //

    type NumericType = string | number;
    
    let add = (param1: NumericType, param2: NumericType) => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }
    }
    console.log(add(23 , 34))

    type User = {
        name: string;
        age: number;
        phone: string
    }
    type Admin = {
        name: string;
        age: number;
        phone: string;
        role:  'admin'
    }
    
    let check = (user: User | Admin) => {
        if('role' in user){
            console.log(`This is admin`);
        }
        else{
            console.log('This is user')
        }
    }

    let normalUser : User ={
        name: 'Shovo',
        age : 20,
        phone: '01XXXXXXXX'
    }
    let admin : Admin = {
        name: "Mahdi",
        age : 17,
        phone: '017XXXXXXXXX',
        role: 'admin'
    }
    check(admin)

    // let myObj : User = {
    //     name: "Mahdi",
    //     age: 17,
    //     phone: '0170XXXXXXX'
    // }















    //
}