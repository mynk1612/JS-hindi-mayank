/*const userEmail = "m@mayan.ai"

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user email");
}*/

// TRUTHY AND FALSY VALUES 
/*
FALSY VALUES 
false, 0, -0, BigInt 0n, "", null, undefined, NaN

TRUTHY VALUES
"0", 'false', " ", [], {}, function(){}--(empty function), false == 0, false == '', 0 == ''
 */
// HOW TO CHECK ARRAY 

const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// HOw to check object is empty

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");  // Object is empty
}

// NULLISH COALESCING OPERATOR (??) : null undefined 

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10
console.log(val1);

// TERNIARY OPERATOR 

// condition ? true : false
const iceTeaPrice = 100
// iceTeaPrice >= 80 ? // less than 80
iceTeaPrice <= 80 ? // more than 80
console.log("less than 80") : console.log("more than 80")  