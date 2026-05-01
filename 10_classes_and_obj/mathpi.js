const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const coffee = {
    name: "Cold coffee",
    price: 250,
    isAvailable: true,

    ordercoffee: function(){
        console.log("code fat gya");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// this code used for changing the writable and enumerable 

Object.defineProperty(coffee, 'name', {
    // writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));


for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
}