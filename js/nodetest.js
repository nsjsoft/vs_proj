'use strict';

var printFunc = function(name) {
    console.log(name);
}

printFunc('vscode & node.js');

const obj = {
    name : "Na SangJin",
    "-16F" : Math.random(),
    add(a,b) {
        return a + b;
    },
    other : {
        age:22
    },
    arraylist : ["1", "2", "3"]
};

console.log(obj.add(1, 6));
console.log(obj.other.age);
console.log(obj.arraylist);