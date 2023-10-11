document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.answerScreen');
    let currentInput = '';

    // Function to update the display
    function updateDisplay() {
        display.innerText = currentInput;
    }

    // Event listener for number and operator buttons
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', function () {
            const value = button.value;

            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = 'Error';
                }
            } else if (value === 'AC') {
                currentInput = '';
            } else if (value === '&#11013;') {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput += value;
            }

            updateDisplay();
        });
    });
});
