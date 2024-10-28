let div = document.querySelector('div');
const button = document.querySelector('button');



const arr = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'green' },
    { color: 'orange' },
    { color: 'navyblue' },
    { color: 'pink' },
    { color: 'rose' },
    { color: 'purple' },
    { color: 'dodgerblue' },
    { color: 'black' },
    { color: 'yellow' },
    { color: 'brown' },
    { color: 'cyan' },
    { color: 'magenta' },
    { color: 'teal' },
    { color: 'violet' },
    { color: 'indigo' },
    { color: 'lavender' },
    { color: 'salmon' },
    { color: 'beige' },
    { color: 'olive' },
    { color: 'maroon' },
    { color: 'gold' },
    { color: 'silver' },
    { color: 'coral' },
    { color: 'peach' },
    { color: 'crimson' },
    { color: 'turquoise' },
    { color: 'mint' },
    { color: 'ivory' }
];


button.addEventListener('click', function() {
    let randomColors = Math.floor(Math.random() * arr.length);
    let colorFlipper = arr[randomColors].color;
    div.style.backgroundColor = colorFlipper;

})