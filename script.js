document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("equal")) {
                try {
                    currentInput = eval(currentInput);
                    display.textContent = currentInput;
                } catch (error) {
                    display.textContent = "Error";
                }
            } else {
                currentInput += button.textContent;
                display.textContent = currentInput;
            }
        });
    });
});
