let characters = [];
 
let maxLengthPassword; // store the length input
let firstPassword = []; // array of chars with the first password
let secondPassword = []; // array of chars with the second password
let password; // stores the password to be saved in the clipboard
let firstPasswordSaved = false; 
let secondPasswordSaved = false; 


document.querySelector("#password").addEventListener("click", randomPassword);
document.querySelector("#lengthInput").addEventListener("input", setLength);
document
  .querySelector(".copy-password")
  .addEventListener("click", copyPassword);

document.querySelector('#toggle').addEventListener('change', (event) => {
    if (event.target.checked) {
        characters = ["A","B","C","D","E","F","G"
                        ,"H","I","J","K","L","M","N","O","P","Q","R","S",
                        "T","U","V","W","X","Y","Z","a","b","c","d","e",
                        "f","g","h","i","j","k","l","m","n","o","p","q",
                        "r","s","t","u","v","w","x","y","z", "0", "1", 
                        "2", "3", "4", "5", "6", "7", "8", "9","~","`",
                        "!","@","#","$","%","^","&","*","(",")","_","-",
                        "+","=","{","[","}","]",",","|",":",";","<",
                        ">",".","?",
                        "/"]
    } else {
      characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
                    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
                    "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", 
                    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                    "S", "T", "U", "V", "W", "X", "Y", "Z"]
    }
});

function copyPassword(id){
    if(!firstPasswordSaved && id === "copy-first-password"){
        password = document.getElementById("firstPass").innerHTML;
        savePassword(password);
        firstPasswordSaved = true;
    }else if(!secondPasswordSaved && id === "copy-second-password"){
        password = document.getElementById("secondPass").innerHTML;
        savePassword(password);
        secondPasswordSaved = true;
    }
}

function savePassword(password){
    navigator.clipboard
      .writeText(password)
      .then(() => {
        window.alert("Password is Copied");
      })
      .catch((err) => {
        alert("Error in copying text", err);
      });
    console.log(password);
}

function setLength(){
    maxLengthPassword = document.querySelector("#lengthInput").value;
    firstPasswordSaved = false;
    secondPasswordSaved = false;
}

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
    document.querySelector("#firstPass").innerHTML = "" 
    for(let letter of firstPassword){
        document.querySelector("#firstPass").innerHTML += letter
    }
}

function setSecondPassword(){
    document.querySelector("#secondPass").innerHTML = "" 
    for(let letter of secondPassword){
        document.querySelector("#secondPass").innerHTML += letter
    }
}