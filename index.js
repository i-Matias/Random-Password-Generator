const characters = ["A","B","C","D","E","F","G"
,"H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",
">",".","?",
"/"];
const maxLengthPassword = 16;


let firstPassword = [];
let secondPassword = [];

document.querySelector("#password").addEventListener("click", randomPassword);

function randomPassword(){
    let i = 0;
    while(i != maxLengthPassword){
        firstPassword.push(getFirstRandomLetter());
        secondPassword.push(getSecondRandomLetter());
        i++;
    }
    setFirstPassword();
    setSecondPassword();
    firstPassword = [];
    secondPassword = [];
}

function getFirstRandomLetter(){    
    let randomFirstPasswordIndex = Math.floor(Math.random() * characters.length);
    return characters[randomFirstPasswordIndex];
}

function getSecondRandomLetter(){
    let randomSecondPasswordIndex = Math.floor(Math.random() * characters.length);
    return characters[randomSecondPasswordIndex]
}

function setFirstPassword(){
    document.querySelector("#firstPass").innerHTML = "1." 
    for(let letter of firstPassword){
        document.querySelector("#firstPass").innerHTML += letter
    }
}

function setSecondPassword(){
    document.querySelector("#secondPass").innerHTML = "2." 
    for(let letter of secondPassword){
        document.querySelector("#secondPass").innerHTML += letter
    }
}