var db = firebase.firestore();

function storeData(){
    
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
    
    var input1 = document.getElementById("title").value;
    var input2 = document.getElementById("fname").value;
    var input3 = document.getElementById("lname").value;
    var input4 = document.getElementById("qty").value;
    var input5 = document.getElementById("date").value;
    var input6 = document.getElementById("phn").value;
    var input7 = document.getElementById("addr").value;
    var input8 = document.getElementById("des").value;
    
    db.collection("blood_requests").doc().set({
            title: input1,
            fname: input2,
            lname: input3,
            bg: val1,
            qty: input4,
            date: input5,
            phno: input6,
            addr: input7,
            des: input8
        })
    window.open("message.html");
}