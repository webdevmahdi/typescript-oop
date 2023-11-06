"use strict";
{
    let add = (param1, param2) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    console.log(add(23, 34));
    let check = (user) => {
        if ('role' in user) {
            console.log(`This is admin`);
        }
        else {
            console.log('This is user');
        }
    };
    let normalUser = {
        name: 'Shovo',
        age: 20,
        phone: '01XXXXXXXX'
    };
    let admin = {
        name: "Mahdi",
        age: 17,
        phone: '017XXXXXXXXX',
        role: 'admin'
    };
    check(admin);
    // let myObj : User = {
    //     name: "Mahdi",
    //     age: 17,
    //     phone: '0170XXXXXXX'
    // }
    //
}
