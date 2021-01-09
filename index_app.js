var show = document.getElementById("menu-links");

function showMenu(){
    show.style.right = "0";
}

function closeMenu(){
    show.style.right = "-200px";
}

function donate(){
    window.open("survey.html");   
}

function blood_rqst(){
    window.open("blood_requests.html");
}

function scrollWin() {
  window.scrollBy(0, 650);
}

var status = document.querySelector('#pro');

auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('patients').doc(user.uid).get().then(doc => {
            const html = `
                <div>${doc.data().fname}</div>
            `;
            status.innerHTML = html;
        })
    }
    else{
        status='LogIn';
    }
});