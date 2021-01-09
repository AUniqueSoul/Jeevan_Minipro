const donorsList = document.querySelector('#donor-list');

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

db.collection('AB+').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderDonor(doc);
	})
})