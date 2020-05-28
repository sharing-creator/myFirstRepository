var id = document.getElementById("inpid");
var pw = document.getElementById("inppw");
var mes = document.getElementById("message");

var response = {};
let request = {};
let mode;

function input(workbutton){

	mode = 0;	//始業と終業関連のボタンの処理を指定

	//2つの入力ボックスがどちらも入力されていたら
	if(!id.value==""&&!pw.value==""){

		var now = new Date();
		var y = now.getFullYear();
		//月は0～11で取得されるので+1する
		var mo = now.getMonth() + 1;
		var d = now.getDate();
		var h = now.getHours();
		var mi = now.getMinutes();

		request = {	"mode" : mode,
				"id" : id.value,
				"pw" : pw.value,
				"year" : y,
				"month" : mo,
				"day" : d,
				"hour" : h,
				"minute" : mi,
				"button" : workbutton}

		$(function ajaxpy(){

			$.ajax({
				type		: "POST",
				url		: "../cgi-bin/start_end_cgi.py",
				data		: JSON.stringify(request),
				contentType	: "application/json",
				success		: function(data) {
					response = data;
					console.log("response : " + response);
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

function admininput(){

	mode = 1;

	user = window.prompt("ユーザー名を入力してください");
	if(user == 'admin'){
		location.href="manage.html"
	}else{
		"ID、またはパスワードが違います"
	}
}