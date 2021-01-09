const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
e.preventDefault();

    const email = signupForm['email'].value;
    const pass = signupForm['psw'].value;

    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        db.collection("patients").doc(cred.user.uid).set({
            fname: signupForm['fname'].value,
            lname: signupForm['lname'].value,
            phno: signupForm['phn'].value
        })
    });
});

function myFunction() {
    alert("Registered as patient successfully!");
  }

  function showPass1() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function showPass2() {
    var y = document.getElementById("conf_pswrd");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  myInput.onkeyup = function() {



    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    if(myInput.value.length >= 6) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
/*
  var check = function() {
    if (document.getElementById('psw').value ==
      document.getElementById('conf_pswrd').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }

var password = document.getElementById("psw")
  , confirm_password = document.getElementById("conf_pswrd");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
*/