// get input-field value
function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputAmount = inputField.value;
    inputField.value = '';
    return inputAmount;
}

// get text-value
function updateTotal(textId, value){
    const textField = document.getElementById(textId);
    const previousTextValue = parseFloat(textField.innerText);
    const textTotal = previousTextValue + parseFloat(value);
    textField.innerText = textTotal;
}


// update balance total
function updateBalance(amount, condition){
    const textBalance = document.getElementById('balance-total');
    const previousTextBalance = parseFloat(textBalance.innerText);
    let updateTextBalance;
    if(condition == true){
        updateTextBalance = previousTextBalance + parseFloat(amount);
    }
    else{
        updateTextBalance = previousTextBalance - parseFloat(amount);
    }
    textBalance.innerText = updateTextBalance;
}

// click deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
})

// click withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
})