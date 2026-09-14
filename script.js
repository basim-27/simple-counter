// Function to update display on screen
function screen(value) {
    document.getElementById("count").innerText = value;
}

// Function to increase counter
function increase() {
    let Counter = Number(document.getElementById("count").innerText);
    Counter++;
    screen(Counter);
}

// Function to decrease counter
function decrease() {
    let Counter = Number(document.getElementById("count").innerText);
    Counter--;
    screen(Counter);
}

//Function to reset counter
function reset() {
    screen(0);
}