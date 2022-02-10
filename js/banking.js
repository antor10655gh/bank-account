function amountDepositWithdraw(inputId){
    // get deposit value from user
    const inputValue = document.getElementById(inputId);
    const inputAmount = inputValue.value;
    // clear cache
    inputValue.value = '';
    return inputAmount;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    // call function
     const depositInputValue = amountDepositWithdraw('deposit-input');

    // get deposit value from deposit account
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositValue = depositTotal.innerText;
    const newDepositValue = parseFloat(depositInputValue) + parseFloat(previousDepositValue);
    depositTotal.innerText = newDepositValue;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;

    const newBalance = parseFloat(depositInputValue) + parseFloat(balanceTotalValue);
    balanceTotal.innerText = newBalance;

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    // call function
    const withdrawInputValue = amountDepositWithdraw('withdraw-input');
    
    // get amount from withdraw account
    const withdrawAccount = document.getElementById('withdraw-total');
    const withdrawAccountValue = withdrawAccount.innerText;

    const newWithdrawValue = parseFloat(withdrawAccountValue) + parseFloat(withdrawInputValue);

    withdrawAccount.innerText = newWithdrawValue;


    // get balance amount from balance account
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;

    const newTotalBalance = parseFloat(balanceTotalValue) - parseFloat(withdrawInputValue);

    balanceTotal.innerText = newTotalBalance;

})