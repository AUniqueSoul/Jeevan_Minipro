const donorsList = document.querySelector('.donor');
const patientList = document.querySelector('.patient');
const blood_rqstList = document.querySelector('.blood_rqst');

function renderDonor(doc){
	let li = document.createElement('li');
	let fname = document.createElement('span');
    let lname = document.createElement('span');
    let age = document.createElement('span');
    let gender = document.createElement('span');
    let bg = document.createElement('span');
	let phno = document.createElement('span');
	let addr = document.createElement('span');
	
	li.setAttribute('data-id', doc.id)
	fname.textContent = doc.data().fname;
    lname.textContent = doc.data().lname;
	age.textContent = doc.data().age;
    gender.textContent = doc.data().gender;
    bg.textContent = doc.data().bg;
    phno.textContent = doc.data().phno;
	addr.textContent = doc.data().addr;
	
	li.appendChild(fname);
    li.appendChild(lname);
	li.appendChild(age);
    li.appendChild(gender);
    li.appendChild(bg);
	li.appendChild(phno);
    li.appendChild(addr);
    
	donorsList.appendChild(li);
}

function renderPatient(doc){
	let li = document.createElement('li');
	let fname = document.createElement('span');
    let lname = document.createElement('span');
    let phno = document.createElement('span');
    let cross = document.createElement('div');
	
	li.setAttribute('data-id', doc.id)
	fname.textContent = doc.data().fname;
    lname.textContent = doc.data().lname;
    phno.textContent = doc.data().phno;
    cross.textContent = 'x';
	
	li.appendChild(fname);
    li.appendChild(lname);
	li.appendChild(phno);
    li.appendChild(cross);
    
    patientList.appendChild(li);
    
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('patient').doc(id).delete();
    });
}

function renderBlood_requests(doc){
	let li = document.createElement('li');
	let fname = document.createElement('span');
    let lname = document.createElement('span');
    let qty = document.createElement('span');
    let title = document.createElement('span');
    let bg = document.createElement('span');
	let phno = document.createElement('span');
	let addr = document.createElement('span');
    let date = document.createElement('span');
    let des = document.createElement('span');
    
	li.setAttribute('data-id', doc.id)
	fname.textContent = doc.data().fname;
    lname.textContent = doc.data().lname;
	qty.textContent = doc.data().qty;
    title.textContent = doc.data().title;
    bg.textContent = doc.data().bg;
    phno.textContent = doc.data().phno;
    addr.textContent = doc.data().addr;
    date.textContent = doc.data().date;
    des.textContent = doc.data().des;
	
	li.appendChild(fname);
    li.appendChild(lname);
	li.appendChild(qty);
    li.appendChild(title);
    li.appendChild(bg);
	li.appendChild(phno);
    li.appendChild(addr);
    li.appendChild(date);
    li.appendChild(des);
    
	blood_rqstList.appendChild(li);
}

db.collection('patients').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderPatient(change.doc);
        })
    })

db.collection('A+').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('A-').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('B+').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('B-').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('O+').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('O-').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('AB+').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('AB-').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderDonor(change.doc);
        })
    })

db.collection('blood_requests').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
            renderBlood_requests(change.doc);
        })
    })