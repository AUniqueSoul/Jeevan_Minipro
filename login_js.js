const login = document.querySelector('#login-form');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = login['login-email'].value;
    const pass = login['login-pass'].value;

    auth.signInWithEmailAndPassword(email, pass).then((user) => {
        window.alert("LogIn successfull!");
  })
  .catch((error) => {
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
});

const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    location.reload();
});

auth.onAuthStateChanged(user => {
    if(user.uid=='uEaDPVxvCgcFJ4bCPHyY37CQxL72') {
        console.log('Admin');
        window.open("admin.html");
    }
    else {
        console.log('user logged in');
        window.open("user_profile.html");
    }
});