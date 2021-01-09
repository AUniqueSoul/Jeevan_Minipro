var db = firebase.firestore();

function storeData(){
    
    if(document.getElementById("m").checked)
    {
        var val = document.getElementById("m").value;
    }
    else if(document.getElementById("f").checked)
    {
        var val = document.getElementById("f").value;
    }                
    else if(document.getElementById("o").checked)
    {
        var val = document.getElementById("o").value;
    }
    
    if(document.getElementById("A+").checked)
    {
        var val1 = document.getElementById("A+").value;
    }
    else if(document.getElementById("A-").checked)
    {
        var val1 = document.getElementById("A-").value;
    }                
    else if(document.getElementById("B+").checked)
    {
        var val1 = document.getElementById("B+").value;
    }
    else if(document.getElementById("B-").checked)
    {
        var val1 = document.getElementById("B-").value;
    }
    else if(document.getElementById("O+").checked)
    {
        var val1 = document.getElementById("O+").value;
    }                
    else if(document.getElementById("O-").checked)
    {
        var val1 = document.getElementById("O-").value;
    }
    else if(document.getElementById("AB+").checked)
    {
        var val1 = document.getElementById("AB+").value;
    }                
    else if(document.getElementById("AB-").checked)
    {
        var val1 = document.getElementById("AB-").value;
    }
    
    var checkBox = document.getElementById("avail");

    if (checkBox.checked == true){
        val2="Available";
    } else {
        val2="Unavailable";
    }
    
    var input1 = document.getElementById("fname").value;
    var input2 = document.getElementById("lname").value;
    var input3 = document.getElementById("age").value;
    var input4 = document.getElementById("email").value;
    var input5 = document.getElementById("pswrd").value;
    var input6 = document.getElementById("phn").value;
    var input7 = document.getElementById("addr").value;
    
    switch(val1) {
    case 'A+':{
    db.collection("A+").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
            })
        break;
        }
        case 'A-':{
        db.collection("A-").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
                })
        break;
        }
        case 'B+':{
        db.collection("B+").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
                })
        break;
        }
        case 'B-':{
        db.collection("B-").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
            })
        break;
        }
        case 'O+':{
        db.collection("O+").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
                })
        break;
        }
        case 'O-':{
        db.collection("O-").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
                })
        break;
        }
        case 'AB+':{
        db.collection("AB+").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
            })
        break;
        }
        case 'AB-':{
        db.collection("AB-").doc().set({
                fname: input1,
                lname: input2,
                age: input3,
                email: input4,
                password: input5,
                phno: input6,
                gender: val,
                bg: val1,
                addr: input7,
                avail: val2
            })
        break;
        }
        default:
            return;
    }
    window.open("message.html");
}

function showPass1() {
    var x = document.getElementById("pswrd");
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