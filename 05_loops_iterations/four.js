// object 

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
       // console.log(myObject[key]);
        // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in for Array 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(programming[key]);

}
/*
const map = new Map()
map.set('IN', "India")
map.set('NW', "Newzealand")
map.set('Fr', "france")
for (const key in map) {
    console.log(key);
}*/