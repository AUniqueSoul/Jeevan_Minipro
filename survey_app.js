const v = document.querySelector('#survey');
v.addEventListener('submit', (e) => {
    e.preventDefault();
    if (document.getElementById("yes1").checked==true &&
    document.getElementById("yes2").checked==true &&
    document.getElementById("yes3").checked==true &&
    document.getElementById("no4").checked==true &&
    document.getElementById("no5").checked==true &&
    document.getElementById("no6").checked==true &&
    document.getElementById("no7").checked==true &&
    document.getElementById("non").checked==true &&
    document.getElementById("yes8").checked==true &&
    document.getElementById("no9").checked==true &&
    document.getElementById("no10").checked==true
    ) {
        alert("Congrats! You are eligible to donate blood :)");
        window.open("donor_register.html");
    }
    else {
        alert("Sorry, you are not eligible :(. Redirecting you to our homepage.");
        window.open("home.html");  
    }
});