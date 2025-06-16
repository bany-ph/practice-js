//ctr + k + ctr + c = for comments
// ctr + k + ctr + u = uncomment 
let counter = 0;
let showCounter;



function printInConsole(){
    alert("Hello, World")
}

function sum(){
    counter = counter + 1
    showCounter = document.querySelector("#showCount").innerHTML = counter
}
function rest(){
    counter -=1
    showCounter = document.querySelector("#showCount").innerHTML = counter
}



