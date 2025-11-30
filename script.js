const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const themeSelect = document.getElementById('themeSelect');

let count = 0;

// Update UI + working animation
const updateDisplay = () => {
    counterDisplay.textContent = count;

    // Restart animation properly
    counterDisplay.classList.remove("pop");
    void counterDisplay.offsetWidth;  // force reflow
    counterDisplay.classList.add("pop");
};

// Increment
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Decrement
decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

// Reset
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Theme Change
themeSelect.addEventListener('change', () => {
    document.body.className = themeSelect.value;
});
