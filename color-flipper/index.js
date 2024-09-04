const div = document.querySelector('div');

// function color(){
//     if(div.innerText = div.style.backgroundColor == 'beige'){

//         div.innerHTML = div.style.backgroundColor = '#ff0000';
//     }
//     else if(div.innerHTML = div.style.backgroundColor == '#ff0000'){
//         div.innerHTML = div.style.backgroundColor = '#3454cd';
//     }
//     else{
//         div.innerHTML = div.style.backgroundColor = 'beige'
//     }
//     console.log('hii'); 
// }


function color(){
    if(div.innerHTML = div.style.backgroundColor === 'beige'){
        div.innerHTML = div.style.backgroundColor = 'red';
    }
    else{
        div.innerHTML = div.style.backgroundColor = 'beige';
    }

}