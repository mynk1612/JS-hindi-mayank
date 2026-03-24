// +++---+++---++-- ARRAY SECOND PART --++---+++---+++
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["flash", "superman", "batman"]

//  Push
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// Concatenation == Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// ++++++++Spread Operator+++++++ -- EASY THAN CONCAT AND PUSHs

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// Another array (Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 

console.log(Array.isArray("Mayank"))
console.log(Array.from("Mayank")) // to make array [ 'M', 'a', 'y', 'a', 'n', 'k' ]
console.log(Array.from({name: "Mayank"}))  // interesting for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
