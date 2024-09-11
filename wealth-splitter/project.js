
const salary1 = prompt('enter your salary');

// if(salary1 <10000){

// }

function necessities(salary) {
    let nec = salary / 2;
    return nec;
}

let manSalary = necessities(salary1);
// console.log("necessities " + manSalary);



function financialfreedom(salary){
    let finance = salary / 10;
    return finance;
}
 manSalary = financialfreedom(salary1)
// console.log("financialfreedom " + manSalary);


function longTermsavings(salary){
    let longTerm = salary / 10;
    return longTerm;
}
manSalary = longTermsavings(salary1);
// console.log("longTermsavings " + manSalary);


function education(salary){
    let edu = salary / 10;
    return edu;
}
manSalary = education(salary1);
// console.log("education " + manSalary);


function play(salary){
    let ply = salary / 10;
    return ply;
}
manSalary = play(salary1);
// console.log("play" + manSalary);


function give(salary){
    let gve = salary / 10;
    return gve;
}
manSalary = give(salary1);
// console.log("give " + manSalary);

function employee(){

    if(salary1 > 10000){
        console.log("necessities " + manSalary);
        console.log("financialfreedom " + manSalary);
        console.log("longTermsavings " + manSalary);
        console.log("education " + manSalary);
        console.log("play" + manSalary);
        console.log("give " + manSalary);  
    }
    else{
        console.log('your salary shorter');
    }
}
employee();