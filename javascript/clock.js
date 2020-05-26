function clock(){
	var weeks = new Array("“ú—j“ú","Œ—j“ú","‰Î—j“ú","…—j“ú","–Ø—j“ú","‹à—j“ú","“y—j“ú");

	var now = new Date();

	var y = now.getFullYear();

	//Œ‚Í0`11‚Åæ“¾‚³‚ê‚é‚Ì‚Å+1‚·‚é
	var mo = now.getMonth() + 1;

	var d = now.getDate();

	var w = weeks[now.getDay()];

	var h = now.getHours();

	var mi = now.getMinutes();

	if(mi < 10){
		mi = "0" + mi;
	}

	document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + "(" + w + ")";
	document.getElementById("clock_time").innerHTML = h + ":" + mi;

}

setInterval(clock, 1000);