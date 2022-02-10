document.getElementById('login-btn').addEventListener('click', function(){
    // get email from user
    const email = document.getElementById('email-field');
    const userEmail = email.value;

    // get password from user
    const password = document.getElementById('password-field');
    const userPassword = password.value;

    if(userEmail == 'test@gmail.com' && userPassword == 'test'){
        window.location.href = 'myAccount.html';
    }
    else{
        alert('Please enter a valid email and password');
    }

    // clear cache
    email.value = '';
    password.value = '';
})