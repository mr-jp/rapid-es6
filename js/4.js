'use strict';

//exports, look at base.js and module1.js

//class fundamentals
//let task = new Task(); //error, used before declaration. Classes are not hoisted
class Task {
    constructor() {
        console.log('constructing task');
        
        //instance properties
        this.name = 'initial name';
        this.type = 'what a type';
        
        let location = 'scoped variable'; //cannot be accessed outside
        
        //new.target
        //console.log(new.target); //new.target points to the initial constructor called (Task or ChildTask, depending on which constructor you're calling)
    }
    
    showId() {
        console.log('99');
    }
    
    static getDefaultId() {
        return 0;
    } 
}

let task = new Task();
console.log(typeof task); //shows function
task.showId();

//class does not pollute any global objects, such as Window

//inheritance
class ChildTask extends Task {
    constructor() {
        super(); //must call super if you declare a constructor
        console.log('construction task in child');
    }
    showId() {
        super.showId(); //how to call a super function
        console.log('100');
    }
}

let childTask = new ChildTask();
childTask.showId();
console.log(childTask.name);
console.log(childTask.location); //cannot be accessed

console.log(Task.getDefaultId());   //static function
Task.id = 99;
console.log(Task.id);   //static property

//new.target
