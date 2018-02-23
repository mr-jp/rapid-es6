//let projectId = 99; //valid
//projectId = 99;   //this will fail because strict mode is automatically set
//console.log("in base.js");

//Export exact values (id is an alias of projectId)
import { projectId as id, projectName } from 'js/module1.js';
//projectName = 'hello';   //runtime error, this is read-only
//however, if the property is inside an exported object, that can be changed

console.log(id, projectName);

import someValue from "/js/module1.js"; //default export
console.log(someValue);

//import statements get hoisted (executed first) before other statements

//import all values from a module
import * as values from "/js/module1.js"; //import everything
console.log(values);

//call an exported function
values.showProject();