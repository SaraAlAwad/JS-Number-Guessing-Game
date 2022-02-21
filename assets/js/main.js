let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let customeNum = document.getElementById("customeNum");
let userCustomeNum = document.getElementById("userNum");

let guessNum = document.getElementById("guessNum");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let btn = document.getElementById("tryAgain")
let goalNum = Math.floor(Math.random() * 100) + 1;
//-----------
let no_of_guesses = 0;
let guesses_num = [];
//-----
let tries = 0;
function guess() {
    let input = guessNum.value;
    console.log(input)
    console.log(goalNum)
    if (num1.checked) {
        tries = num1.value;
    }
    else if (num2.checked) {
        tries = num2.value;
    }
    else if (num3.checked) {
        tries = num3.value;
    }
    else {
        tries = Number(userCustomeNum.value)
    }
    no_of_guesses++;
    output2.innerHTML = `${no_of_guesses}  / ${tries}`
    //----------------------
    if (isNaN(input) || input < 1 || input > 100) {
        alert("Please Enter a number Between 1 to 100");
    }
    else {
        guesses_num.push(input);
    }
    if (input == goalNum && no_of_guesses <= tries) {
        output.innerHTML = `correct ! You Gussed The Number! <br> it was ${goalNum} <br>
            You guessd it in ${no_of_guesses} Guesses`;
    }
    else if (input < goalNum && no_of_guesses <= tries) {
        output.innerHTML = `Your Guess is Too Low! try a highr number than ${input}, try again `;
    }
    else if (input > goalNum && no_of_guesses <= tries) {
        output.innerHTML = `Your Guess is Too High try a lower number than ${input} try again`;

    }
    else {
        alert("Sorry! You Lost! You Have No More Tries");
        btn.classList.remove("none")
    }
}
function rest() {
    location.reload();
}