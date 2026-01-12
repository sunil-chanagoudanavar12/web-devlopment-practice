
let a = Math.floor(Math.random() * 10) + 1;
console.log(a); 
let test=0;
let b;

while (true) {
    b = Number(prompt("Guess the number between 1 to 10"));
    test++;

    if (a === b) {
        alert(` Congratulations! You guessed the correct number.  ${100-test}`);
        break;
    } 
    else if (b < a) {
        alert("Your number is smaller than the given number");
    } 
    else {
        alert("Your number is bigger than the given number");
    }
}
