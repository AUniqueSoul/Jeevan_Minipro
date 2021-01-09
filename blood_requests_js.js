var db = firebase.firestore();

const list_div = document.querySelector(".list-item");

db.collection("blood_requests").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
            list_div.innerHTML += "<div class='list-item'><h3>" + doc.data().title + "</h3><pre>" + doc.data().des + "</pre><li>" + doc.data().fname + " " + doc.data().lname + " <button>Contact</button> " + "<br><br> Required Blood : " + doc.data().bg + "<span class='qty'> Quantity : " + doc.data().qty + "</span><br><br>" + doc.data().addr + "<p> Requiring Date : " + doc.data().date + "</p>" + "</li></div>"
    });
});