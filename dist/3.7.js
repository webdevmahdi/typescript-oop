"use strict";
{
    //
    class Operation {
        static increment() {
            return Operation.counter = Operation.counter + 1;
        }
        static decrement() {
            return Operation.counter = Operation.counter - 1;
        }
    }
    Operation.counter = 0;
    let instance1 = new Operation();
    console.log(Operation.increment());
    console.log(Operation.increment());
    console.log(Operation.increment());
    let instance2 = new Operation();
    console.log(Operation.decrement());
    //
}
