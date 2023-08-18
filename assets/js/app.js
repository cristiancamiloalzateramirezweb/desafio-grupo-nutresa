function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        document.getElementById("totalAmount").innerText = "Por favor, ingrese valores válidos.";
        return;
    }

    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;
    var tip = totalAmount - billAmount;

    document.getElementById("tip").innerText = "Propina dejada: $" + tip.toFixed(2);
    document.getElementById("totalAmount").innerText = "Monto total a pagar: $" + totalAmount.toFixed(2);
}

const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateTip);