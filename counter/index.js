const head = document.querySelector("h1");


let count = 0;

function increment(){
    count++;
    // console.log(count);
    head.innerHTML = count ;

        if(count % 10 === 0){
            alert(`count is now mod of${count}`)
        }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#increment').onclick = increment;
})


function reset(){
    count = 0;
    // console.log(count);
    head.innerHTML = count ;
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#reset').onclick = reset;
})


function decrement(){
    count--;
    // console.log(count);
    head.innerHTML = count;
    
    // if(count % 10 === 0){
    //     alert(`count is now mod of ${count}`);
    // }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#decrement').onclick = decrement;
})