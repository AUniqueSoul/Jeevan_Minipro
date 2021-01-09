const donorsList = document.querySelector('#donor-list');

function renderDonor(doc){
	let li = document.createElement('li');
	let fname = document.createElement('span');
    let lname = document.createElement('span');
    let age = document.createElement('span');
    let gender = document.createElement('span');
	let phno = document.createElement('span');
	let addr = document.createElement('span');
    let avail = document.createElement('span');
	
	li.setAttribute('data-id', doc.id)
	fname.textContent = doc.data().fname;
    lname.textContent = doc.data().lname;
	age.textContent = doc.data().age;
    gender.textContent = doc.data().gender;
    phno.textContent = doc.data().phno;
	addr.textContent = doc.data().addr;
    avail.textContent = doc.data().avail;
	
	li.appendChild(fname);
    li.appendChild(lname);
	li.appendChild(age);
    li.appendChild(gender);
	li.appendChild(phno);
    li.appendChild(addr);
    li.appendChild(avail);

    
	donorsList.appendChild(li);
    }
    db.collection('B+').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

function get_data1(){
    var val1 = document.getElementById("filter1").value;
    if (val1=="Availabe")
        sortByAvail();
    else
        sortByUnavail();
}

function get_data2(){
    var val2 = document.getElementById("filter2").value;
    console.log(val2)
    if (val2=="Male"){
        sortByMale();
    }
    else {
        sortByFemale();
    }
}

function get_data3(){
    var val3 = document.getElementById("filter3").value;
    console.log(val3)
    if (val3=="Maligaon"){
        sortByMaligaon();
    }
    else if (val3=="Hatigaon"){
        sortByHatigaon();
    }
}

function sortByAvail(){
    
    var donorsList = document.querySelector('#donor-list');

    donorsList.innerHTML = '';
    
    function renderDonor(doc){
        let li = document.createElement('li');
        let fname = document.createElement('span');
        let lname = document.createElement('span');
        let age = document.createElement('span');
        let gender = document.createElement('span');
        let phno = document.createElement('span');
        let addr = document.createElement('span');
        let avail = document.createElement('span');
        
        li.setAttribute('data-id', doc.id)
        fname.textContent = doc.data().fname;
        lname.textContent = doc.data().lname;
        age.textContent = doc.data().age;
        gender.textContent = doc.data().gender;
        phno.textContent = doc.data().phno;
        addr.textContent = doc.data().addr;
        avail.textContent = doc.data().avail;
        
        li.appendChild(fname);
        li.appendChild(lname);
        li.appendChild(age);
        li.appendChild(gender);
        li.appendChild(phno);
        li.appendChild(addr);
        li.appendChild(avail);
    
        donorsList.appendChild(li);
    }

        
        db.collection('B+').where('avail', '==', 'Available').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                renderDonor(change.doc);
            })
        })
}

function sortByUnavail(){
    
    var donorsList = document.querySelector('#donor-list');

    donorsList.innerHTML = '';
    
    function renderDonor(doc){
        let li = document.createElement('li');
        let fname = document.createElement('span');
        let lname = document.createElement('span');
        let age = document.createElement('span');
        let gender = document.createElement('span');
        let phno = document.createElement('span');
        let addr = document.createElement('span');
        let avail = document.createElement('span');
        
        li.setAttribute('data-id', doc.id)
        fname.textContent = doc.data().fname;
        lname.textContent = doc.data().lname;
        age.textContent = doc.data().age;
        gender.textContent = doc.data().gender;
        phno.textContent = doc.data().phno;
        addr.textContent = doc.data().addr;
        avail.textContent = doc.data().avail;
        
        li.appendChild(fname);
        li.appendChild(lname);
        li.appendChild(age);
        li.appendChild(gender);
        li.appendChild(phno);
        li.appendChild(addr);
        li.appendChild(avail);
    
        donorsList.appendChild(li);
    }

        
        db.collection('B+').where('avail', '==', 'Unavailable').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                renderDonor(change.doc);
            })
        })
}

function sortByMale(){
    
    var donorsList = document.querySelector('#donor-list');

    donorsList.innerHTML = '';
    
    function renderDonor(doc){
        let li = document.createElement('li');
        let fname = document.createElement('span');
        let lname = document.createElement('span');
        let age = document.createElement('span');
        let gender = document.createElement('span');
        let phno = document.createElement('span');
        let addr = document.createElement('span');
        let avail = document.createElement('span');
        
        li.setAttribute('data-id', doc.id)
        fname.textContent = doc.data().fname;
        lname.textContent = doc.data().lname;
        age.textContent = doc.data().age;
        gender.textContent = doc.data().gender;
        phno.textContent = doc.data().phno;
        addr.textContent = doc.data().addr;
        avail.textContent = doc.data().avail;
        
        li.appendChild(fname);
        li.appendChild(lname);
        li.appendChild(age);
        li.appendChild(gender);
        li.appendChild(phno);
        li.appendChild(addr);
        li.appendChild(avail);
    
        donorsList.appendChild(li);
    }

        
        db.collection('B+').where('gender', '==', 'Male').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                renderDonor(change.doc);
            })
        })
}

function sortByFemale(){
    
    var donorsList = document.querySelector('#donor-list');

    donorsList.innerHTML = '';
    
    function renderDonor(doc){
        let li = document.createElement('li');
        let fname = document.createElement('span');
        let lname = document.createElement('span');
        let age = document.createElement('span');
        let gender = document.createElement('span');
        let phno = document.createElement('span');
        let addr = document.createElement('span');
        let avail = document.createElement('span');
        
        li.setAttribute('data-id', doc.id)
        fname.textContent = doc.data().fname;
        lname.textContent = doc.data().lname;
        age.textContent = doc.data().age;
        gender.textContent = doc.data().gender;
        phno.textContent = doc.data().phno;
        addr.textContent = doc.data().addr;
        avail.textContent = doc.data().avail;
        
        li.appendChild(fname);
        li.appendChild(lname);
        li.appendChild(age);
        li.appendChild(gender);
        li.appendChild(phno);
        li.appendChild(addr);
        li.appendChild(avail);
    
        donorsList.appendChild(li);
    }

        
        db.collection('B+').where('gender', '==', 'Female').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                renderDonor(change.doc);
            })
        })
}

function sortByMaligaon(){
    
    var donorsList = document.querySelector('#donor-list');

    donorsList.innerHTML = '';
    
    function renderDonor(doc){
        let li = document.createElement('li');
        let fname = document.createElement('span');
        let lname = document.createElement('span');
        let age = document.createElement('span');
        let gender = document.createElement('span');
        let phno = document.createElement('span');
        let addr = document.createElement('span');
        let avail = document.createElement('span');
        
        li.setAttribute('data-id', doc.id)
        fname.textContent = doc.data().fname;
        lname.textContent = doc.data().lname;
        age.textContent = doc.data().age;
        gender.textContent = doc.data().gender;
        phno.textContent = doc.data().phno;
        addr.textContent = doc.data().addr;
        avail.textContent = doc.data().avail;
        
        li.appendChild(fname);
        li.appendChild(lname);
        li.appendChild(age);
        li.appendChild(gender);
        li.appendChild(phno);
        li.appendChild(addr);
        li.appendChild(avail);
    
        donorsList.appendChild(li);
    }

        
        db.collection('B+').where('addr', '==', 'Maligaon').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                renderDonor(change.doc);
            })
        })
}

function sortByHatigaon(){
    
    var donorsList = document.querySelector('#donor-list');

    donorsList.innerHTML = '';
    
    function renderDonor(doc){
        let li = document.createElement('li');
        let fname = document.createElement('span');
        let lname = document.createElement('span');
        let age = document.createElement('span');
        let gender = document.createElement('span');
        let phno = document.createElement('span');
        let addr = document.createElement('span');
        let avail = document.createElement('span');
        
        li.setAttribute('data-id', doc.id)
        fname.textContent = doc.data().fname;
        lname.textContent = doc.data().lname;
        age.textContent = doc.data().age;
        gender.textContent = doc.data().gender;
        phno.textContent = doc.data().phno;
        addr.textContent = doc.data().addr;
        avail.textContent = doc.data().avail;
        
        li.appendChild(fname);
        li.appendChild(lname);
        li.appendChild(age);
        li.appendChild(gender);
        li.appendChild(phno);
        li.appendChild(addr);
        li.appendChild(avail);
    
        donorsList.appendChild(li);
    }

        
        db.collection('B+').where('addr', '==', 'Hatigaon').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                renderDonor(change.doc);
            })
        })
}