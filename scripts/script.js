document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed");
});

function buttonClicked() {
    let product = document.getElementById('selectProducts');
    let count = document.getElementById('inputCounts');
    let display = document.getElementById('calculator-display');

    if (/^\d+$/.test(count.value)) {
        display.value = parseInt(product.value) * parseInt(count.value);
    } else {
        alert("Для ввода нужно указывать числа!")
    }
};