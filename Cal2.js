// Get display element
let display = document.getElementById("display");
let currentInput = "";
let lastInput = "";

// Insert values into the screen
function insert(value) {
    // Prevent multiple decimal points
    if (value === '.' && currentInput.includes('.')) return;
    
    // For squaring a number
    if (value === '^2') {
        currentInput = (Math.pow(parseFloat(currentInput), 2)).toString();
    } else {
        currentInput += value;
    }

    // Update the display
    display.innerText = currentInput;
    lastInput = currentInput;
}

// Clear all inputs and reset the screen
function clearAll() {
    currentInput = "";
    display.innerText = "0";
}

// Perform the calculation
function calculate() {
    try {
        // Handle modulo operation
        if (currentInput.includes('%')) {
            let parts = currentInput.split('%');
            if (parts.length === 2) {
                currentInput = (parseFloat(parts[0]) % parseFloat(parts[1])).toString();
            }
        } else {
            currentInput = eval(currentInput).toString(); // Using eval to handle basic operations
        }

        display.innerText = currentInput;
    } catch (error) {
        display.innerText = "Error"; // Handle invalid operations
    }
}

// Prevent adding multiple operators like ++ or --
function insertOperator(operator) {
    if (currentInput.length === 0) {
        return;
    }
    if (lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '%') {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    lastInput = operator;
    display.innerText = currentInput;
}
