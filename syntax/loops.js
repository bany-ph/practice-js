/* data structures loops */

const names = ["bany", "juan", "rodolfo"]

/* ----- FOR OF ----- */
for(const name of names){
    //console.log(name);
}



/* FOR IN */

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

for(const key in persona){
    // console.log(`${key} : ${persona[key]}`);
}





/* ---- FOR EACH ---- */
const numbers = [1,2,3]
numbers.forEach(function(num){
    // console.log(num * 2);
});

/* .map */
const numbers2 = numbers.map(number => number * 2);
// console.log(numbers2);