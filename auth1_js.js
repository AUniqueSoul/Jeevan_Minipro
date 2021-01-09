const profileDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    console.log(user);
    if (user) {
        const html = `
            <div>${users.email}</div>
        `;
        profileDetails.innerHTML = html;
    }
    else {
        profileDetails.innerHTML = '';
    }
}

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in');
    }
    else{
        console.log('user logged out');
    }
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
e.preventDefault();

    const email = signupForm['signup-email'].value;
    const pass = signupForm['signup-pass'].value;

    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        console.log(cred.user);
        signupForm.reset();
    });
});

const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

const login = document.querySelector('#login-form');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = login['login-email'].value;
    const pass = login['login-pass'].value;

    auth.signInWithEmailAndPassword(email, pass);
});