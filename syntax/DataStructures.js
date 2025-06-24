
/* -------- OBJECTS ------- */
const persona = {
    userName: "bany",
    age: 18,
    city: "Medellin",
    skills:{
        "one": "HTML",
        "two": "CSS",
        "three": "PY"
    }

};

/* desestructurar objetos */
const {userName,age,city, active = false} = persona //active is a default var in case it doesn't exist
const {one,two,three} = persona.skills


/* console.log(userName);
console.log(age);
console.log(city);
console.log(active);
console.log(one) */


// console.table(persona); 

/* common methods */

// console.log(Object.keys(persona));
// console.log(Object.entries(persona));
// console.log(Object.values(persona));
// console.log(persona.hasOwnProperty("age")); // check if an object exist


/* --------- SETS  ------------ */


const numbers = new Set([1,2,3,3,4]);

    numbers.add(5);
    numbers.delete(3) // delete all the 3


//console.log(numbers);




/* ---------- MAPS ------- */
const map = new Map();
const obj = {id: 1};
const func = function() {};

map.set(obj,true);
map.set(func,"the key is a function");
// console.log(map.get(obj));
// console.log(map);





/* --------- ARRAYS ------ */
const colors = ["rojo", "verde", "celeste"]
colors.push("azul")


// console.log(colors[1]);
// console.log(colors);
const numbers2 = [1,2,3,4,5];
console.log(numbers2.filter(num => num > 2))
console.log(numbers2.find(num => num == 2))
