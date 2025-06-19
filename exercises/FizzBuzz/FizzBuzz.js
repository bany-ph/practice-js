const newElement = (output, isFizzBuzz) =>{
    
    let p = document.createElement("p");
    p.textContent = output;
    (isFizzBuzz == true) ? p.className = "fizz-buzz" : p.className = "numbers";
    document.getElementById("div").appendChild(p) // create the <p> inside the div
    
}

let fizz = "Fizz";
let buzz = "Buzz";
let output;
for (let i = 1; i <= 100; i++) {
 /*  
    (i % 3 == 0) ? output = fizz + buzz : output = i;
    (i % 5 == 0 && i % 3 == 0) ? output = fizz + buzz : output = i 
*/
    output = "";
    let flag = true;
    if(i % 3 != 0 && i % 5 !=0){
        flag= false;
        output = i
    }else if(i % 3 == 0){
        output = fizz
    }
    if(i % 5 == 0) {
        output += buzz
    }

    newElement(output, flag);
}






