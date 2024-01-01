const passwordbox = document.getElementById('Password')
const lenght = 12
const upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmopqrstuvwxyz"
const numbers ="0123456789"
const symbols='!"£$%^&*(){}+_?><:@'

const allcharacters = upperCase + lowerCase + numbers + symbols;

function createpassword(){
    let password ="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*upperCase.length)];
    password += numbers[Math.floor(Math.random()*upperCase.length)];
    password += symbols[Math.floor(Math.random()*upperCase.length)];
while(
    lenght > password.length){
        password += allcharacters[Math.floor(Math.random()*allcharacters.length)];
    }
    passwordbox.value = password;
}

