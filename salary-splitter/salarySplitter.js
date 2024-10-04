let input = document.querySelector('#name');



function necessities(){
    let sum = input.value / 2;
     document.querySelector('#nec').innerHTML = sum.toFixed(2);
     console.log(sum);
}

function financial(){
    let sum = input.value / 10;
    document.querySelector('#fin').innerHTML = sum.toFixed(2);
    console.log(sum);
}

function long(){
    let sum = input.value / 10;
    console.log(sum);
    document.querySelector('#long').innerHTML = sum.toFixed(2);
}

function education(){
    let sum = input.value / 10;
    document.querySelector('#edu').innerHTML = sum.toFixed(2);
    console.log(sum);
    
}

function play(){
    let sum = input.value / 10;
    document.querySelector('#play').innerHTML = sum.toFixed(2);
    console.log(sum);   
}

function give(){
    let sum = input.value / 10;
    document.querySelector('#give').innerHTML = sum.toFixed(2);
    console.log(sum);
}

function sum(){
    necessities();
    financial();
    long();
    education();
    play();
    give();
}