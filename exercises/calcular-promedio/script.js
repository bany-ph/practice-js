const clickPromedio = document.getElementById("promedio");


clickPromedio.addEventListener("click", () =>{

    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        let temp = document.getElementById(`nota${i}`).value // get the value of the input
        temp = parseFloat(temp)
        sum += temp;
    }
    let result = sum / 5;
    document.getElementById("show-promedio").textContent = result
    let message = document.getElementById("pass-or-not");
    if(result > 3.0){
        message.style.color = "green"
        message.textContent = "You pass!"
    }else{
         message.style.color = "red"
        message.textContent = "you didn't pass"
    }
})
