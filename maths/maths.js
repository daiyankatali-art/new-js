// Math
// let x=3.21;
// let y=2;
// let z=34;

// z=Math.round(x);
// z=Math.floor(x);
// z=Math.ceil(x);
// z=Math.trunc(x);
// z=Math.pow(x,y);
// z=Math.sqrt(x);
// z=Math.log(x);
// z=Math.sin(x);

// let max= Math.max(x,y,z);

// console.log(max);


// GENERATE RANDOM NUMBER

// const min= 50;
// const max = 100;
// let randomnum=Math.floor(Math.random()*(max-min)) +min;

// console.log(randomnum);


// const mybutton=document.getElementById("mybutton");
// const mylabel = document.getElementById("mylabel");
// const min=1;
// const max=6;
// let randomnum;

// mybutton.onclick=function(){
//     randomnum=Math.floor(Math.random()*max) +min;
//     mylabel.textContent=randomnum;
// }
// console.log(Math.PI);
// console.log(Math.E)


// IF STATEMENTS:IF A STATEMENT IS TRUE, EXECUTE SOME CODE. IF NOT, DO SOMETHING ELSE
// let age;
// let hasLicense=true;
// age=window.prompt(`Enter your age `);
// if(age>=18){
//     console.log('u are old')

// }
// else{
//     console.log("u are too young")
// }
//     if(hasLicense){
//         console.log('u have a license')
//     }
//     else{
//         console.log("no")
//     }

const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const resultElement=document.getElementById("resultElement");
let age=0;
mysubmit.onclick=function(){
age=mytext.value;
age=Number(age);
if(age>=18){
    resultElement.textContent="welcome";
}
else{
    resultElement.textContent="goodbye";
    }
}