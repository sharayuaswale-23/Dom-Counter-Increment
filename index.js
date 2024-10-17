let counterEl = document.getElementById("counter");
let count =0;

function dec(){
    count -= 1;
    counterEl.textContent = count;
    if(count<0){
        counterEl.style.color = "red";
    }
}

function inc(){
    count += 1;
    counterEl.textContent = count;
    if(count>0){
        counterEl.style.color = "green";
    }
}