var id = document.getElementById("inpid");
var pw = document.getElementById("inppw");
var mes = document.getElementById("message");

var response = {};
let request = {};
let mode;

function input(workbutton){

	mode = 0;	//�n�ƂƏI�Ɗ֘A�̃{�^���̏������w��

	//2�̓��̓{�b�N�X���ǂ�������͂���Ă�����
	if(!id.value==""&&!pw.value==""){

		var now = new Date();
		var y = now.getFullYear();
		//����0�`11�Ŏ擾�����̂�+1����
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
					mes.value = "�ʐM���s";
					console.log("XMLHttpRequest : " + XMLHttpRequest.status);
					console.log("textStatus     : " + textStatus);
					console.log("errorThrown    : " + errorThrown.message);
				}
			});
		});

	}

	//�ǂ��炩�����͂���ĂȂ�������
	else{
		mes.value = "ID���p�X���[�h�����͂���Ă��܂���";
	}

}

function admininput(){

	mode = 1;

	user = window.prompt("���[�U�[������͂��Ă�������");
	if(user == 'admin'){
		location.href="manage.html"
	}else{
		"ID�A�܂��̓p�X���[�h���Ⴂ�܂�"
	}
}