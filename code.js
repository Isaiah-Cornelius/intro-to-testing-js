"use strict";

// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

//Exercise #1 - 5
//sayHello function
// function sayHello(input){
//     if (input === 'Alex'){
//         return 'Hello, Alex!'
//     } else if (input === 'Pat'){
//         return 'Hello, Pat!'
//     }
//     return "Hello, Jane!";
// }

//Exercise #6 Refactor sayHello()
// function sayHello(input){
//     return "Hello, " + input + "!";
// }

//Exercise #8 Repeat step
// function sayHello(input){
//     if(typeof input === 'undefined'){
//         return "Hello, World!";
//     } else if (input === true){
//         return "Hello, World!";
//     } else if (input === false){
//         return "Hello, World!";
//     }
//     return "Hello, " + input + "!";
// }

//Exercise #8 Refactor
function sayHello(input){
    if (input !== "" && typeof input === 'string'){
        if(Number(input) <= Infinity){
            return "Hello, World!";
        }
        return "Hello, " + input + "!";
    }
    return "Hello, World!";
}

//Exercise #10
function isFive(x){
    if (x === 5) {
        return true;
        }
    else
        return false;
}

//Exercise #11

function isEven(x){
    if(typeof x === 'boolean'){
        return false;
    } else if (x % 2 === 0){
        return true;
    }
    return false;
}

