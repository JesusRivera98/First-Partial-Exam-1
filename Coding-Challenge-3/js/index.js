let res = document.getElementsByClassName("resultsSection")[0];
let but = document.getElementById("submitBtn");
function addBuzz(){
    res.innerHTML = res.innerHTML +
    '<div class="result"> Buzz <div>'
}
function addFizz(){
    res.innerHTML = res.innerHTML +
    '<div class="result"> Fizz <div>'
}
function addFizzzBuzz(){
    res.innerHTML = res.innerHTML +
    '<div class="result"> FizzBuzz <div>'
}
function addNum(num){
    res.innerHTML = res.innerHTML +
    '<div class="result">' + num + '<div>'
}

function addSomething(num){
    if(num%3 == 0 && num%5 == 0){
        addFizzzBuzz();
    }
    else  if(num%3 == 0 || num%5 == 0){
        if(num % 3 == 0){
            addFizz();    
        }
        if(num%5 == 0){
            addBuzz();
        }
    }
    else{
        addNum(num);
    }
}
//resultsSection
function detectaClick(){
    but.addEventListener('click', (event) =>{
        event.preventDefault;
        let tbox = document.getElementsByClassName("fizzBuzzNumber")[0];
        console.log(num);
        let num = Number(tbox.value);
        if(num > 0){
            addSomething(num);
        }
    } )
}

function init(){

}

