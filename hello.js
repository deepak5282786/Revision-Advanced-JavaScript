//--------------Array Methods---------

//-----1. concat()
// const arr1 = ["a", "b", "c", "d"];
// const arr2 = ["e", "f", "g", "h"];
// const arr3 = ["g", "b", "z"];

// const mergeArr = arr1.concat(arr2, arr3);
// console.log(mergeArr);
// console.log(arr1);
// console.log(arr2);

// const a = {
//   fname: "Deepak",
//   foods: {
//     dinner: "Pasta",
//   },
// };
// const b = JSON.parse(JSON.stringify(a));

// b.fname = "ravi";
// b.foods.dinner = "microni";
// console.log(b);
// console.log(a);
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.copyWithin(2, 0, 2));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());
// console.log(fruits);

// let rev = 0;
// let num = 123456;
// let lastDigit;

// while (num != 0) {
//   lastDigit = num % 10; //6 5  4
//   rev = rev * 10 + lastDigit; //6 65
//   num = Math.floor(num / 10); //2345  234
// }

// console.log("Reverse number : " + rev);

// let a = 4;
// let b = 6;
// console.log(a, b);
// a = a + b; //10
// b = a - b; //10-6 = 4
// a = a - b;

// console.log(a, b);

// let c = a; //4
// a = b; //6
// b = c; //4
// console.log(a, b);

// let rev = 0;
// let num = 121;
// let lastDigit;
// let origNum = num;

// while (num != 0) {
//   lastDigit = num % 10; //6 5  4
//   rev = rev * 10 + lastDigit; //6 65
//   num = Math.floor(num / 10); //2345  234
// }
// console.log(num);
// if (rev == origNum) {
//   console.log("polindrome");
// } else {
//   console.log("not polindrome");
// }

//prime

// let num = 1009;
// let isPrime = true;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime == true) {
//   console.log("prime");
// } else {
//   console.log("not prime");
// }

// let num = prompt("Please enter your number");
// let fact = 1;
// for (let i = num; i >= 1; i--) {
//   fact = fact * i;
// }
// console.log(fact);

///----------  THIS keyword :- refer to current object  -----------

// console.log(this); //windows

// function fn() {
//   console.log(this); //windows
// }
// fn();

// function fn() {
//   console.log(this);
// }

// let obj = {
//   name: "deepak",
//   func: fn,
// };

// obj.func(); ///self object

// function fn() {
//   console.log(this); ///obj
//   function abc() {
//     console.log(this);  //windows
//   }
//   abc();
// }

// let obj = {
//   name: "Deepak",
//   func: fn,
// };

// obj.func();

//------ How to resolve this issue
//----- METHOD - 1 (by using bind function )

// function fn() {
//   console.log(this);
//   function abc() {
//     console.log(this);
//   }
//   let ret = abc.bind(this);
//   ret();
// }

// let obj = {
//   name: "Deepak",
//   func: fn,
// };

// obj.func();

//--------  METHOD - 2 (by using ARROW function )
// function fn() {
//   console.log(this);
//   let abc = () => {
//     console.log(this);
//   };
//   abc();
// }

// let obj = {
//   name: "Deepak",
//   func: fn,
// };

// obj.func();
