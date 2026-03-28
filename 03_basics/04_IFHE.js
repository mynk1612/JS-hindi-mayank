// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

/* nrml way to print 
function chai() {
    console.log(`DB CONNECTED`);
}
chai()  // DB CONNECTED*/

// IFHE used to create a local scope for variables to prevent them from polluting the global scope.
// ()() first paranthesis function definition , second for execution..

(function chai() {
    // named IFHE
    console.log(`DB CONNECTED`);
})();// DB CONNECTED 


( () => {
    console.log(`DB CONNECTED Two `);
}); // error 

( function chai2 () {
    console.log(`DB CONNECTED Two `);
}); // for remove error before ending the semicolon is used 

// suppose that console.log expect variable
( (name) => {
    // unnamed IFHE 
    console.log(`DB CONNECTED Two ${name}`);
})('mayank')  //DB CONNECTED Two mayank
