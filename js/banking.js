document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositValue = depositTotal.innerText;
    const newDepositValue = parseFloat(depositInputValue) + parseFloat(previousDepositValue);
    depositTotal.innerText = newDepositValue;

    // clear cache
    depositInput.value = '';
})