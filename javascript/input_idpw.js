var id = document.getElementById("inpid");
var pw = document.getElementById("inppw");
var mes = document.getElementById("message");

var response = {};
let request = {};

function input(workbutton){

	//2つの入力ボックスがどちらも入力されていたら
	if(!id.value==""&&!pw.value==""){

		var now = new Date();
		var y = now.getFullYear();
		//月は0～11で取得されるので+1する
		var mo = now.getMonth() + 1;
		var d = now.getDate();
		var h = now.getHours();
		var mi = now.getMinutes();

		request = {	"id" : id.value,
				"pw" : pw.value,
				"year" : y,
				"month" : mo,
				"day" : d,
				"hour" : h,
				"minute" : mi,
				"button" : workbutton}

		$(function(){

			$.ajax({
				type		: "POST",
				url		: "../cgi-bin/workstartend2.py",
				data		: JSON.stringify(request),
				contentType	: "application/json",
				success		: function(data) {
					response = data;
					mes.value = response["res"];
				},
				error		: function(XMLHttpRequest, textStatus, errorThrown) {
					mes.value = "通信失敗";
					console.log("XMLHttpRequest : " + XMLHttpRequest.status);
					console.log("textStatus     : " + textStatus);
					console.log("errorThrown    : " + errorThrown.message);
				}
			});
		});

	}

	//どちらかが入力されてなかったら
	else{
		mes.value = "IDかパスワードが入力されていません";
	}

}