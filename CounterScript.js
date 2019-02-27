var value=document.querySelector("#counter");
var lowercounter=document.querySelector("#lowerCounterBtn");
var uppercounter=document.querySelector("#addCounterBtn");
let count=0;
lowercounter.addEventListener("click",dcounter);
uppercounter.addEventListener("click",icounter);
function dcounter(){
    count--;
    value.textContent=count;
    if(value.innerHTML<'0'){
        value.style.color="red";
    }
    else if(value.innerHTML === '0'){
        value.style.color="white";
    }
    value.animate([{opacity:"0.2"},{opacity:"0.1"}],{duration:500,fill:'forwards'});
}
function icounter(){
    count++;
    value.textContent=count;
    if(value.innerHTML>'0'){
        value.style.color="green";
    }
    else if(value.innerHTML === '0'){
        value.style.color="white";
    }
    value.animate([{opacity:"0.2"},{opacity:"0.1"}],{duration:500,fill:'forwards'});

}
