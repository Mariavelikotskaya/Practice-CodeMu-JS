"use strict";
"use strict";
//Задача 1
for (let i=1; i<=100; i++) {
    console.log(i);
}

//Задача 2
for (let i=100; i>=1; i--) {
    console.log(i);
}

//Задача 3
for (let i=1; i<=100; i++) {
    if (i % 2 == 0) {
    console.log(i);
}
}

//Задача 4
let arr = [];
for (let i = 1; i<=10; i++) {
    arr.push('x');
}
console.log(arr);

//Задача 5
let arr = [];
for (let i = 1; i<=10; i++) {
    arr.push(i);
}
console.log(arr);

//Задача 6
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
    if (elem>=0 && elem<=10) {
        console.log(elem);
    }
}

//Задача 7
let arr = [2, 5, 9, 15, 1, 4];
let counter = 0;
for (let elem of arr) {
    if (elem == 5) {
        counter++;
    }
}
console.log(counter);

//Задача 8
let arr = [2, 5, 9, 15, 1, 4];
let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);

//Задача 9
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let b;
for (let i=0; i<arr.length; i++) {
    b = arr[i] * arr[i];
    sum = sum + b;
}
console.log(sum);

let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum += arr[i] * arr[i];
}
console.log(sum);

//Задача 10
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum += arr[i];
}
let result  = sum / arr.length;
console.log(result);
