// Dates 
// let myDate = new Date()
// console.log(myDate); //2026-03-21T20:33:20.578Z
// console.log(myDate.toString()); // Sat Mar 21 2026 20:34:19 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); //2026-03-21T20:36:20.205Z
// console.log(myDate.toDateString()); //Sat Mar 21 2026
// console.log(myDate.toLocaleString());  //3/21/2026, 8:36:20 PM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // month start through jan
// console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());  //1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14"); //// 1/14/2023, 12:00:00 AM
// let myCreatedDate = new Date("01-12-2026"); // 1/12/2026, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString()); // this console used in both one by one..

// ++++++++++++++ TIME STAMP +++++++++++++++

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1774126184518 in ms
// console.log(myCreatedDate); //2026-01-12T00:00:00.000Z
// console.log(myCreatedDate.getTime()); //1768176000000 for time
// console.log(Date.now()); // 1774126377871
// console.log(Math.floor(Date.now()/1000)); // Get current Unix timestamp

let newDate = new Date()
console.log(newDate); //2026-03-21T20:58:52.764Z
console.log(newDate.getDate()); // 21
console.log(newDate.getDay()); // 6
console.log(newDate.getFullYear());  //2026
console.log(newDate.getHours());  //21
console.log(newDate.getMilliseconds()); //922
console.log(newDate.getMinutes()); //1
console.log(newDate.getMinutes() + 1);  //6
console.log(newDate.getMonth());  //2
console.log(newDate.getSeconds());  //52
console.log(newDate.getTime());  //1774126912922
console.log(newDate.getTimezoneOffset());  //0
console.log(newDate.getUTCDate());  //21
console.log(newDate.getUTCDay());  //6


// `${newDate.getDay()}and the time` // string interpolation

/*
newDate.toLocaleString('default'.{
    weekday: "long", 
    // timeZone: ""
})*/