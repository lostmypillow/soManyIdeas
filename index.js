const checkbox = document.getElementById("checkbox");
const ragdollb = document.getElementById("ragdollb");
const tabbyb = document.getElementById("tabbyb");
let cat = "";

document.getElementById("btn").onclick=function(){
    username = document.getElementById("un").value;
    //console.log(username);
    password = document.getElementById("pw").value;
    //console.log(password);
    age = Number(document.getElementById("age").value);
    console.log(age, typeof age)
    if(checkbox.checked){
        if(ragdollb.checked){
            if(age>=18){
                cat = "ragdoll";
                document.getElementById("wc").textContent=`Welcome ${username}! You are a/an ${age} year old ragdoll!`;
            
            
            }
            else{
                document.getElementById("wc").textContent=`Welcome ${username}! You are an underage ragdoll!`;
            }
            
        }
        else if(tabbyb.checked){
            if(age>=18){
                cat = "tabby";
                document.getElementById("wc").textContent=`Welcome ${username}! You are a/an ${age} year old tabby!`;
            
            
            }
            else{
                document.getElementById("wc").textContent=`Welcome ${username}! You are an underage tabby!`;
            }
            
        }
        

    }
    else{
        if(age>=18){
            cat = "tabby";
            document.getElementById("wc").textContent=`Welcome ${username}! You are ${age} years old!`;
        
        
        }
        else{
            document.getElementById("wc").textContent=`Welcome ${username}! You are underage`;
        }
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

let purchaseAmount = 125;
let discount = purchaseAmount>= 100? 10: 0;
// condition? codeIfTrue: codeIfFalse;

console.log(`Your total is ${purchaseAmount-purchaseAmount*(discount/100)}`);

let day = 3;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    default:
        console.log(`Your ${day} is not valid`)
}

let username 