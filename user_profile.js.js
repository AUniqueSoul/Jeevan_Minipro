const profileDetails = document.querySelector('.profile-details');

const setupUI = (user) => {
        db.collection('patients').doc(user.uid).get().then(doc => {
            const html = `
                    <h3>${doc.data().fname}</h3>
                    <h5>${doc.data().lname}</h5>
            `;
            profileDetails.innerHTML = html;
        });
}

const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    location.reload();
});

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in');
        setupUI(user);
    }
    else{
        console.log('user logged out');
        setupUI();
    }
});