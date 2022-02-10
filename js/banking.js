document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposit value from user
    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;

    // get deposit value from deposit account
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositValue = depositTotal.innerText;
    const newDepositValue = parseFloat(depositInputValue) + parseFloat(previousDepositValue);
    depositTotal.innerText = newDepositValue;

    // clear cache
    depositInput.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;

    const newBalance = parseFloat(depositInputValue) + parseFloat(balanceTotalValue);
    balanceTotal.innerText = newBalance;

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    // get withdraw amount from user
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    
    // get amount from withdraw account
    const withdrawAccount = document.getElementById('withdraw-total');
    const withdrawAccountValue = withdrawAccount.innerText;

    const newWithdrawValue = parseFloat(withdrawAccountValue) + parseFloat(withdrawInputValue);

    withdrawAccount.innerText = newWithdrawValue;

    // clear cache 
    withdrawInput.value = '';

    // get balance amount from balance account
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;

    const newTotalBalance = parseFloat(balanceTotalValue) - parseFloat(withdrawInputValue);

    balanceTotal.innerText = newTotalBalance;

})