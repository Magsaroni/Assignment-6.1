// Allowing what is being executed be called out in the Console.
function playEqualDigits(){
    // narrating what the function does.
    console.log("playEqualDigits function was called.")

    //roll the die.
var number1 = rollDie();
console.log("The first number is: " + number1);

//roll a second die.
var number2 = rollDie();
console.log("The second number is: " + number2);

//add the rolls together.
var sum = number1 + number2;
console.log("The sum of the numbers are " + sum);

// output the numbers to the page.
document.getElementById("numberResult").innerHTML = "Number one is: " + number1;
document.getElementById("2numberResult").innerHTML = "Number two is: " + number2;
document.getElementById("sumResult").innerHTML = "The sum is: " + sum;

//Code the rules.
// equal digits win. non equal such as 29, 34, etc., lose.
if (sum == 11 || sum == 22 || sum == 33 || sum == 44 || sum == 55 || sum == 66 || sum == 77 || sum == 88 || sum == 99){
    document.getElementById("equalResult").innerHTML = "You Win! ";
}

//any other number that isnt the same as the other digit loses.
else(
    document.getElementById("equalResult").innerHTML = "You Lose! "
)



}
// Function is rolling the die/creating random number.
function rollDie(){
    //Generating the random number.
var die = Math.random() * 55;

//we will get a rounded whole number.
return Math.ceil(die)
}