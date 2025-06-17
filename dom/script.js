//ctr + k + ctr + c = for comments
// ctr + k + ctr + u = uncomment 
let counter = 0;


function printInConsole(){
    alert("Hello, World")
}

const sum = () =>{
    counter = counter + 1
    document.querySelector("#showCount").textContent = counter
}
const rest = () =>{
    counter -=1
    document.querySelector("#showCount").textContent = counter
}






