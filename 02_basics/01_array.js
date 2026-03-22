// Array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["Yogesh", "Mayank"]
// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

//   ++++++ARRAY  methods +++ 
// myArr.push(6)
// console.log(myArr); // adding value in array
// myArr.pop()
// console.log(myArr);
const myArr = [0, 1, 2, 3, 4, 5]
// myArr.unshift(0) // insert array
// myArr.shift() // used for remove start array
// console.log(myArr); //insert in start of Array

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9));  // -1

const newArr = myArr.join() // to join old arr to new arr

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5

// console.log(typeof newArr); //string

// ++++++++++++  SLICE, SPLICE ++++++++++++++++

console.log("A", myArr);  //A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3) 

console.log(myn1); //[ 1, 2 ]
console.log("B", myArr);   //B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)  // array will remove 

console.log("C", myArr); // C [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]
