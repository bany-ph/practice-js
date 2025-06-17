// var: global 
// let: local
//const: never change the value 

let myName = "brisbany"

// * show in web console 
// console.log(myName)
// console.error(myName)
// console.warn(myName)


let lastName = "Puerta"
let fullName = `${myName} ${lastName}` 
// console.log(fullName)



// ? OBJECTS 
let users =  [
    {
        userName : "Bany",
        lastName : "Puerta",
        age : 18,
        active: true
    },
    {
        userName: "bris",
        lastName: "Herrera",
        age: 17,
        active: false
    }
]

console.log(users[0].lastName)
console.log(typeof users) // show the type -> object

/* end example objects */


