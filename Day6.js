const add = (op) => {

    event.preventDefault()

    let val1 = document.getElementById("value1").value
    let val2 = document.getElementById("value2").value

    let display = document.getElementById("display")
    let sum = Number(val1) + Number(val2);
    let sub = Number(val1) - Number(val2);
    let mul = Number(val1) * Number(val2);
    let div = Number(val1) / Number(val2);


    /*display.innerHTML = `The sum of ${val1.value} and ${val2.value} is ${val1.value+val2.value}`;
    
    display.innerHTML = `The div of ${val1.value} and ${val2.value} is ${val1.value/val2.value}`;

    display.innerHTML = `The mul of ${val1.value} and ${val2.value} is ${val1.value*val2.value}`;

    display.innerHTML = `The sub of ${val1.value} and ${val2.value} is ${val1.value-val2.value}`;*/

    if (op === "add") {
        display.innerHTML = `The sum is ${sum}`;
    }
    else if (op === "sub") {
        display.innerHTML = `The sub is ${sub}`;
    }
    else if (op === "mul") {
        display.innerHTML = `The mul is ${mul}`;
    }
    else if (op === "div") {
        display.innerHTML = `The div is ${div}`;
    }
}