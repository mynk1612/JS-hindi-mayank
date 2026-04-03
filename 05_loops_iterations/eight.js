// REDUCE  == a user-supplied "reducer" callback function on each element of the array..

const myNums = [1, 2, 3]
/*
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 3)
*/
// arrow function

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 3)

console.log(myTotal); // 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "data analyst course",
        price: 4999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay); // 8997