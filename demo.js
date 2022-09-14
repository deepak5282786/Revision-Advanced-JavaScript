// Spread Operator :-- The spread operator ... is used to expand or spread an iterable or an array.
// The Spread Syntax (also known as the Spread Operator) is another excellent feature of ES6. As the name indicates, it takes an iterable (like an array) and expands (spreads) it into individual elements.

// let arrStr = ["a", "b", "c"];
// console.log(arrStr);
// console.log(...arrStr);

// let arrStr2 = arrStr;
// let arrStr2 = [...arrStr];

// arrStr2.push("d");
// console.log(arrStr);
// console.log(arrStr2);

// let arrStr3 = [...arrStr, "d", "e", "f"];
// console.log(arrStr3);

// let arrNum = [8, 9, 10, 15, 30, 71, 4, 6, 3, 5];

// fin min num using MATH
// console.log(`Minimum number from array :-${Math.min(...arrNum)}`);
// console.log(`${Math.min(...arrNum)}`); //math object works on list
// console.log(`${Math.max(...arrNum)}`);

// spread operator with Object

// const user1 = {
//   name1: "Jen",
//   age: 22,
// };

// const user2 = {
//   name2: "Andrew",
//   location: "Philadelphia",
// };

// const mergedUsers = { ...user1, ...user2 };
// console.log(mergedUsers);

// Example of spread operator with objects

// let obj = {
//   name: "Deepak",
//   address: {
//     country: "india",
//     state: {
//       code: "ML",
//       pin: 232105,
//     },
//   },
// };

// let obj2 = obj;
// obj2.name = "Ravi";

// console.log(obj);
// console.log(obj2);
// let obj2 = { ...obj }; //SHALOW COPY
// obj2.name = "Ravi";
// console.log(obj2);
// console.log(obj);
// let obj2 = { ...obj, address: { ...obj.address } };
// obj2.address.country = "ukraine";
// let obj2 = {
//   ...obj,
//   address: { ...obj.address, state: { ...obj.address.state } },
// };  //DEEP COPY

// obj2.address.state.code = 10;
// console.log(obj);
// console.log(obj2);

// ShortCut to do
// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "Ravi";
// obj2.address.country = "ukraine";
// obj2.address.state.code = 11;
// console.log(obj);
// console.log(obj2);

// ------------Create a Clone of an Object
// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
// };

// const userClone = { ...user };
// console.log(userClone === user); //false
// console.log(user);
// console.log(userClone);

// --------Add Properties to Objects
// const userClone = { ...user, salary: 23000 };
// console.log(user);
// console.log(userClone);

// --------Update Properties
// const userClone = { ...user, age: 40 };
// console.log(user);
// console.log(userClone);

// ----------Update Nested Objects
// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
//   department: {
//     name: "Sales",
//     Shift: "Morning",
//     address: {
//       city: "Bangalore",
//       street: "7th Residency Rd",
//       zip: 560001,
//     },
//   },
// };

// const updateUser = { ...user, department: { ...user.department, number: 7 } };

// console.log(user);
// console.log(updateUser);

// --------Combine (or Merge) two Objects
// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
// };

// const department = {
//   id: "001",
//   Shift: "Morning",
// };
// console.log({ ...user });

// const mergeUD = { ...user, ...department };
// console.log(mergeUD);

// --------------------Object.Assign :- The JavaScript Object.assign() method copies all enumerable own properties of given objects to a single object and returns it.

// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
// };

// const cloneObj = Object.assign({}, user); ///cloning object
// console.log(cloneObj);
// console.log(user);

// cloneObj.name = "peter parker";
// cloneObj.age = "23";
// console.log(cloneObj);
// console.log(user);

// ----merging object using Object.assign
// const o1 = { a: 1, b: 1, c: 1 };
// const o2 = { b: 2, c: 2 };
// const o3 = { c: 3 };
// const mergeObj = Object.assign({}, o1, o2, o3);
// console.log(o1);
// console.log(o2);
// console.log(o3);
// console.log(mergeObj);
// -----------------The Rest Parameter in JavaScript

// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
// };

// const { address, ...rest } = user;
// console.log(address, rest);

// ------------Array Destructuring in JavaScript

// var person = ["Ravi", "Deepak", "vardhan", "rishi"];

// var [p1, p2, p3, p4] = person;
// var [p1, p2, , p3] = person;

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// --------Object Destructuring in JavaScript :--- JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable

// const user = {
//   names: "Deepak",
//   age: "23",
//   address: "B-1319 sanfort world school",
// };
// let userName = user.names;
// let age = user.age;
// let address = user.address;
// console.log(userName, age, address);
// ------using Destructuring
// let { names, age, address, city = "varanasi" } = user;
// console.log(names, age, address, city);

// ------adding alias
// let { names: userNames, address: add } = user;
// console.log(userNames);
// console.log(add);

// -------Nested Object Destructuring

// const user = {
//   userName: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
//   department: {
//     name: "Sales",
//     Shift: "Morning",
//     address: {
//       city: "Bangalore",
//       street: "7th Residency Rd",
//       zip: 560001,
//     },
//   },
// };

// const {
//   department: {
//     address: { city },
//   },
// } = user;
// console.log(department);
// console.log(address);
// console.log(city);

// -------Destructure to the Function Parameter
// function logUser({ userName, age }) {
//   console.log(`my name is ${userName} and age is ${age}`);
// }

// logUser(user);

// ----------forEach, find, filter, map & reduce
// ---- for loop
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum = sum + arr1[i];
// }
// console.log(sum);
// ---forEach
// var arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function SumArray(arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   console.log(sum);
// }
// SumArray(arrays);

// let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arrays.forEach((item) => console.log(item + 2));

// ------FIND METHOD

// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// for (let i = 0; i < arr.length; i++) { //older ways
//   if (arr[i] == 44) {
//     console.log("element found");
//   }
// }

// const result = arr.find((item) => {
//   if (item === 4) {
//     return true;
//   }
// });
// console.log(result);

// ------ shorter version
// let arr = [];
// const result = arr.find((item) => item < 4);
// console.log(result);

// ------  find in object
// const employee = [
//   {
//     id: 1,
//     ename: "vardhan",
//     age: 25,
//   },
//   {
//     id: 2,
//     ename: "Deepak",
//     age: 22,
//   },
//   {
//     id: 4,
//     ename: "rishi",
//     age: 27,
//   },
//   {
//     id: 3,
//     ename: "ravi",
//     age: 30,
//   },
// ];

// const empAge = employee.find((item) => item.age > 22);
// console.log(empAge);
// const empAgeLast = employee.findLast((item) => item.age > 22);
// console.log(empAgeLast);
// /////----above example with destructuring-----
// const empAgeLast = employee.findLast(({ age }) => age > 22);
// console.log(empAgeLast);
// const empAge = employee.find(({ age }) => age > 22);
// console.log(empAge);

// ------ filter & indexOf & lastIndexOf
// const employee = [
//   {
//     id: 1,
//     ename: "vardhan",
//     age: 25,
//   },
//   {
//     id: 2,
//     ename: "Deepak",
//     age: 22,
//   },
//   {
//     id: 4,
//     ename: "rishi",
//     age: 27,
//   },
//   {
//     id: 3,
//     ename: "ravi",
//     age: 30,
//   },
// ];

// const empAge = employee.filter(({ age }) => age < 25);
// const empAge = employee.filter((age) => {
//   if (age.age === 30) {
//     return true;
//   }
// });

// console.log(empAge);

// /-----findIndex
// const empIndex = employee.findIndex(({ age }) => age === 30);
// console.log(empIndex);

// ------------map------
// const employee = [
//   {
//     id: 1,
//     ename: "vardhan",
//     age: 25,
//   },
//   {
//     id: 2,
//     ename: "Deepak",
//     age: 22,
//   },
//   {
//     id: 4,
//     ename: "rishi",
//     age: 27,
//   },
//   {
//     id: 3,
//     ename: "ravi",
//     age: 30,
//   },
// ];

// const prntItem = employee.map((item) => item.age * 3);
// console.log(prntItem);

// const num = [5, 1, 9, 3, 5, 6, 7];
// const addNum = num.map((ele) => ele + 3);
// console.log(addNum);
// -------  reduce method -  ---- - - - - - - -
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumNumber = num.reduce((sum, curr) => {
// console.log(sum, curr)
//   return (sum += curr);
// }, 0);
// console.log(sumNumber);

// const flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((previousValue, currentValue) => {
//   console.log("curr", currentValue);
//   console.log("prev", previousValue);
//   return previousValue.concat(currentValue);
// }, []);
// flattened is [0, 1, 2, 3, 4, 5]
// console.log("flaterred", flattened);

// let a = [1, 2];
// let b = [3, 4];

// console.log(a.concat(b));

// const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// const myArrayWithNoDuplicates = myArray.reduce(
//   (previousValue, currentValue) => {
//     console.log("PV", previousValue);
//     console.log("CV", currentValue);
//     console.log(previousValue.indexOf(currentValue));
//     if (previousValue.indexOf(currentValue) === -1) {
//       previousValue.push(currentValue);
//     }
//     return previousValue;
//   },
//   []
// );

// console.log(myArrayWithNoDuplicates);

// const user = {
//   userName: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
//   department: {
//     name: "Sales",
//     Shift: "Morning",
//     address: {
//       city: "Bangalore",
//       street: "7th Residency Rd",
//       zip: 560001,
//     },
//   },
// };
// console.log(Object.keys(user).forEach((key) => console.log(user[key])));
// console.log(Object.values(user));
// console.log(Object.keys(user));

// ---------Variable scope

// let fName = "Deepak"; // global variable access any where in programe
// function myName() {
//   let lName = "Yadav"; // local variable access only in the block(blocked scope)
//   let fullName = fName + " " + lName;
//   console.log(fullName);
// }
// myName();
// // console.log(fullName); // error due to let has blocked scoped access only in that block

// ----- Difference between == and === {== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values}

// console.log(5 == 5); //true  checks only value
// console.log(5 == "5"); //true  checks only value
// console.log(5 === 5); // true   check value as well as datatype
// console.log(5 === "5"); //false   check value as well as datatype(5(number) === '5'(string))

// -------Function and Arrow Function (block of code designed to perform a particular task . it execute when something invoke or call it)
// 1.function statement or function Declaration
// function a() {
//   console.log("Hello A");
// }
// a(); //hello (function invokation)
// 2. function expression :- Assigning a function to a variable. Function acts like a value.

// var b = function () {
//   console.log("Hello B");
// };
// b();

// 3. Anonymous function : - A function without a name.
// var c = function () {
//   console.log("Hello C");
// };

// c();
// var d = function XYZ() {
//   console.log("Hello D");
// };

// d(); // d is called
// XYZ(); //error

// // 4.Arrow function
// const e = () => {
//   console.log("Hello E");
// };
// e();

// // -------- callback function :--- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// function y() {
//   console.log("this is function Y");
// }
// function x(y) {
//   console.log("this is function X");
//   y();
// }

// x(y); // y is callback function

// // -----IIFE(Immediately Invoked Function Expression)
// (function abc() {
//   console.log("Hi I am function ABC");
// })();

// ----- Promises & 10.	Using async and await / then & catch for handling promise

// // Creation of Promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     return reject("Error");
//   }, 10000);
// });

// // .then .catch
// const invokingFunction = () => {
//   promise
//     .then((res) => {
//       console.log("resolved!!" + res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// invokingFunction();

// // Async Await Syntax
// const invokePromiseWithAsyncAwait = async () => {
//   try {
//     const result = await promise;
//     console.log(result, "Suceess");
//   } catch (error) {
//     console.log(error);
//   }
// };

// invokePromiseWithAsyncAwait();
