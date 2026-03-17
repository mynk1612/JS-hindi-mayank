/* +++++++++++++++++ Basic Conversion ++++++++++++++ */ 
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//  console.log("2" > 1);
//  console.log("02" > 1);

/* ++++++++++++++++++ Equality check,not use this type of converison  ++++++++++*/
/* console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0 );
console.log(undefined > 0 );
console.log(undefined < 0 );
*/

/*the reason is that an equality check == and comparisons > <>= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 i false. */

/* +++++++++++++  Strick Check ++++++++++++ */ 

console.log("2" === 2);
