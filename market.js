const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clotheInput = document.getElementById('clothes');
const calculate = document.getElementById('counting');
const expenseText = document.getElementById('expense');
const balance = document.getElementById('balance');

// Saving and Remaining Amount
const save = document.getElementById('save');
const saveButton = document.getElementById('deposit');
const saving = document.getElementById('saving');
const remaining = document.getElementById('remaining');

// Get Input value as a number
function getInputField(number) {
    const amount = number.value;

    if (amount >= 0) {
        const fieldName = parseInt(amount);

        return fieldName;
    } else {
        alert('Please enter a valid number');
    }
    // number.value = '';

}

// Get Total Expenses and Balance
calculate.addEventListener('click', function () {
    const income = getInputField(incomeInput);
    const food = getInputField(foodInput);
    const rent = getInputField(rentInput);
    const clothe = getInputField(clotheInput);
    const expense = food + rent + clothe;

    if (income >= expense) {
        const netBalance = income - expense;
        expenseText.innerHTML = expense;
        balance.innerHTML = netBalance;

        const remainingAmountText = parseInt(remaining.innerText);
        remaining.innerText = netBalance;

    } else {
        alert('Please enter a Positive number');
    }

    // console.log(netBalance);
});
