// const tinderUser = new Object() // this is singleton object 
const tinderUser = {} // this is not a singleton object 

tinderUser.id = "123abc"
tinderUser.name = "mass"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

/* +++++ OBJECT INSIDE OBJECT ++++++++ */
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mayank",
            lastname: "kandpal"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);

// +++++++++++++ Merge object ++++++++++++++

const obj1 = {1: "a", 2: "b"}  // keys = number , values = "string"
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "c", 6: "d"}
// const obj3 = {obj1, obj2 } // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4 ) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }
 
/* ++++++++++++++ SPREAD OPERATOR ++++++++++++++ */
const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

// DATABASE VALUE 

const users = [
    {
        id: 1,
        email: "mynk@gmail.com" 
    },
    {
        id: 1,
        email: "mynk@gmail.com" 
    },
    {
        id: 1,
        email: "mynk@gmail.com" 
    },
]

users[1].email

// console.log(tinderUser); //{ id: '123abc', name: 'mass', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'mass', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'mass' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isloggedIn'))




/*   +++++++++++++ DESTRUCTURING +++++++++++++++++++++*/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"mayank"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor); //mayank
console.log(instructor); // mayank (short code object destruct )

/* ++ destructing ++ const navbar = ({company}) => {}navbar(conpany = "mayank") */

/* +++++++++------ API ------------
++++++++ -- ---JSON ----*/
// {
//     "name": "mayank",
//     "coursename": "js in hindi", // "" -- keys 
//     "price": "free"
// }

[
    {},
    {},
    {}
]

/* Random User API 
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

*/