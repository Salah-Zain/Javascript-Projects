const head = document.querySelector("h1");


let count = 0;

function increment(){
    count++;
    // console.log(count);
    head.innerHTML = count++ ;

}

function reset(){
    count = 0;
    // console.log(count);
    head.innerHTML = count ;
}

function decrement(){
    count --;
    // console.log(count);
    head.innerHTML = count-- ;
}
