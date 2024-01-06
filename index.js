document.getElementById("btn").onclick=function(){
    username = document.getElementById("un").value;
    //console.log(username);
    password = document.getElementById("pw").value;
    //console.log(password);
    age = Number(document.getElementById("age").value);
    console.log(age, typeof age)
    if(age>=18){
        document.getElementById("wc").textContent=`Welcome ${username}! You are ${age} years old!`;
    }
    else{
        document.getElementById("wc").textContent=`Welcome ${username}! You are underage!`;
    }
    
}


const db = document.getElementById("decreaseb");
const rb = document.getElementById("resetb");
const ib = document.getElementById("increaseb");
const randomb = document.getElementById("randomb");
const countLabel = document.getElementById("countLabel");
const min = 1;
const max = 6;
let count = 0;

ib.onclick = function(){
    count++;
    countLabel.textContent = count
}

db.onclick = function(){
    count--;
    countLabel.textContent = count
}

rb.onclick = function(){
    count = 0;
    countLabel.textContent = count
}

randomb.onclick = function(){
    count = Math.floor(Math.random()* max)+ min;
    countLabel.textContent = count;
}