var cordova = require("cordova");
window.onload = action
var action = document.pesan.action = login();	
var rs = ["Royal Progress", "RSUP Dr Cipto Mangunkusumo", "RSUP Fatmawati", "RSUP Persahabatan"]

function login() {
	var nama = document.pesan.nama.value;
	var valid = false;

	var name = ["admin"];
	for (var i = 0; i < name.length; i++) {
		if ((nama == name[i]) {
			valid = true;
			break;
		};
	};

	if (valid) {
		window.location.href='rs.html';
	}; else {
		alert("Please register first")
	}
}

var ctx = document.getElementById("royal-chart").getContext("2d");
var myNewChart = new Chart(ctx).PolarArea(data);
var myPieChart = new Chart(ctx[0]).Pie(data,options);

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]