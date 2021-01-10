const set = document.querySelector('.btn');
set.addEventListener('click', (e) => {
    e.preventDefault();
    
    var userEmail = document.querySelector('#email').value;

    auth.sendPasswordResetEmail(userEmail).then(function(){
        window.alert("Email has been sent to your email address. Please check your inbox and reset your password.");

    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        window.alert("Message : " + errorMessage);
    });
});