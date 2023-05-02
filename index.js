let maximum = parseInt(prompt("Enter the maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("enter your first guess:"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {

    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess:"));
    } else {
        guess = parseInt(prompt("Too low!Enter a new guess:"));
    }
    if (guess === 'q') {
        console.log("OK, YOU QUIT!!");
    } else {
        console.log("YOU QUIT!!");

    }
}
console.log("YOU GOT IT!!! IT TOOK YOU " + attempts + " GUESSES!!");
