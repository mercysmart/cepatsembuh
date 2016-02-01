function data() {
	var url = "https://cepatsembuh.firebaseio.com/";
	var ref = new Firebase(url);
	
	// Hospital input
	var rs = document.getElementById('hospital_form').value();
	var name_rs = document.getElementById('name_rs').value();
	var bpjs_rs = document.getElementById('bpjs_rs').value();
	var nik_rs = document.getElementById('nik_rs').value();
	var sex_rs = document.getElementById('sex_rs').value();
	var date_rs = document.getElementById('date_rs').value();

	// Puskesmas input
	var puskesmas = document.getElementById('puskesmas_form').value;
	var name_puskesmas = document.getElementById('name_puskesmas').value();
	var bpjs_puskesmas = document.getElementById('bpjs_puskesmas').value();
	var nik_puskesmas = document.getElementById('nik_puskesmas').value();
	var sex_puskesmas = document.getElementById('sex_puskesmas').value();
	var date_puskesmas = document.getElementById('date_puskesmas').value();

	var rs-all = ref.child("rs");
	rs-all.set({	  
	  person: {
	    nama: name_rs,
	    bpjs: bpjs_rs,
	    nik: nik_rs,
	    sex: sex_rs,
	    date: date_rs,
	  },	  
	});
	
	var puskesmas-all = ref.child("puskesmas");
	puskesmas-all.set({	  
	  person: {
	    nama: name_puskesmas,
	    bpjs: bpjs_puskesmas,
	    nik: nik_puskesmas,
	    sex: sex_puskesmas,
	    date: date_puskesmas,
	  },	  
	});

	if (var rs-all == '') {
		return false;
		console.log('Input is empty')
	};	
	else {
		return true;
	}
	if (var puskesmas-all == '') {
		return false;
		console.log('Input is empty')
	};
	else {
		return true;
	}
}

function mail() {
	// Hospital form
	if (window.location == 'form-rs.html') {
		window.location.href = 'state-rs.html';
	};
	
	// Puskesmas form
	if (window.location ==  'form-puskesmas.html') {
		window.location.href = 'state-puskesmas.html';
	};	
}