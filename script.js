document.addEventListener('DOMContentLoaded', function() {
    const billTotalInput = document.getElementById('billSum');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const percentage = document.getElementById('percentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalBillInput = document.getElementById('totalBill');

    // Update tip percentage display
    tipPercentageInput.addEventListener('input', function() {
        percentage.textContent = `${tipPercentageInput.value}%`;
        calculateTip();
    });

    // Calculate tip and total bill when the bill total changes
    billTotalInput.addEventListener('input', function() {
        // Check if the input value is a valid number
        if (!isValidNumber(billTotalInput.value)) {
            // Display error message or notice
            alert("Please enter a valid number for the bill total.");
            // Clear the input field
            billTotalInput.value = "";
            return;
        }
        calculateTip();
    });

    function calculateTip() {
        const billSum = parseFloat(billTotalInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
        const tipAmount = billSum * tipPercentage;
        const totalBill = billSum + tipAmount;

        tipAmountInput.value = tipAmount.toFixed(2);
        totalBillInput.value = totalBill.toFixed(2);
    }

    // Function to check if a value is a valid number
    function isValidNumber(value) {
        // Use isNaN to check if the value is not a number
        return !isNaN(value);
    }
});
