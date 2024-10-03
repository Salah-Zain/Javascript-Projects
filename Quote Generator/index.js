var quotesArray = [
    {
        quotes: ' “Be yourself; everyone else is already taken.” ',
        author: '― Oscar Wilde'
    },
    {
        quotes: ' “Be the change that you wish to see in the world.” ',
        author: '― Mahatma Gandhi'
    },
    {
        quotes: ' “A friend is someone who knows all about you and still loves you.” ',
        author: '― Elbert Hubbard'
    },
    {
        quotes: ' "Always forgive your enemies; nothing annoys them so much." ',
        author: '― Oscar Wilde'
    },
    {
        quotes: ' “Live as if you were to die tomorrow. Learn as if you were to live forever.” ',
        author: '― Mahatma Gandhi'
    },
    {
        quotes: ' “I am so clever that sometimes I don’t understand a single word of what I am saying.” ',
        author: '― Oscar Wilde'
    },
    {
        quotes: ' “It is better to be hated for what you are than to be loved for what you are not.” ',
        author: '― Andre Gide'
    },
    {
        quotes: ' “Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.” ',
        author: '― Buddha'
    },
    {
        quotes: ' “In three words I can sum up everything I’ve learned about life: it goes on.” ',
        author: '― Robert Frost'
    },
    {
        quotes: ' “No one can make you feel inferior without your consent.” ',
        author: '― Eleanor Roosevelt'
    },
    {
        quotes: ' “To live is the rarest thing in the world. Most people exist, that is all.” ',
        author: '― Oscar Wilde'
    },
    {
        quotes: ' “The only way to do great work is to love what you do.” ',
        author: '― Steve Jobs'
    },
    {
        quotes: ' “It does not matter how slowly you go as long as you do not stop.” ',
        author: '― Confucius'
    },
    {
        quotes: ' “Success is not final, failure is not fatal: It is the courage to continue that counts.” ',
        author: '― Winston S. Churchill'
    },
    {
        quotes: ' “You only live once, but if you do it right, once is enough.” ',
        author: '― Mae West'
    },
    {
        quotes: ' “Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.” ',
        author: '― Mark Twain'
    },
    {
        quotes: ' “Everything you can imagine is real.” ',
        author: '― Pablo Picasso'
    },
    {
        quotes: ' “Happiness is not something ready made. It comes from your own actions.” ',
        author: '― Dalai Lama XIV'
    },
    {
        quotes: ' “Life is what happens when you’re busy making other plans.” ',
        author: '― John Lennon'
    },
    {
        quotes: ' “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ',
        author: '― Ralph Waldo Emerson'
    }
];


const na = document.querySelector('p');
const qu = document.querySelector('span');


function randomQuotes(){
    const randomArray = Math.floor(Math.random() * quotesArray.length);
    na.innerHTML = quotesArray[randomArray].quotes;
    qu.innerHTML = quotesArray[randomArray].author;
}




// function randomQuotes(){
//     var z = Math.floor(Math.random() * quotesArray.length);
//     if(z==0){
//         na.innerHTML = quotesArray[0].quotes;
//         qu.innerHTML = quotesArray[0].author;
//     }
//     else if(z==1){
//         na.innerHTML = quotesArray[1].quotes;
//         qu.innerHTML = quotesArray[1].author;
//     }
// }


// function num(){
//     var c = Math.floor(Math.random()*9);
//     console.log(c);
//     document.querySelector('p').innerHTML = c
// }
