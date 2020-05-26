function clock(){
	var weeks = new Array("日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日");

	var now = new Date();

	var y = now.getFullYear();

	//月は0〜11で取得されるので+1する
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