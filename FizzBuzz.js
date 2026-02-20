// TODO: Define constants for the form and the result display area

// TODO: Add the first line of the event listener to handle form submission

    // Prevent the form from refreshing the page

    const myText = document.getElementById("buzz")
    const mySubmit = document.getElementById("submitBtn")
    const result = document.getElementById("result")
    let object;
    let num;
    mySubmit.addEventListener("click", function (event) {
        event.preventDefault();
        num = myText.value
        num = Number(num)
        if  (num % 3 === 0 && num % 5 === 0 ) {
            object = "FizzBuzz"
        } 
        else if (num % 5 === 0) {
            object = "Buzz"
        }
        else if (num % 3 === 0 ) {
            object = "Fizz"
        }
        else {
            object = num
        }
        result.textContent = object
    });
// TODO: Get the number from the form input

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
