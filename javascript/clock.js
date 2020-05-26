function clock(){
	var weeks = new Array("���j��","���j��","�Ηj��","���j��","�ؗj��","���j��","�y�j��");

	var now = new Date();

	var y = now.getFullYear();

	//����0�`11�Ŏ擾�����̂�+1����
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