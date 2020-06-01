$(function ajaxpy(){

	$.ajax({
		type		: "POST",
		url		: "../cgi-bin/start_end_cgi.py",
		data		: JSON.stringify(request),
		contentType	: "application/json",
		success		: function(data) {
			response = data;
			mes.value = response["res"];
		},
		error		: function(XMLHttpRequest, textStatus, errorThrown) {
			mes.value = "í êMé∏îs";
			console.log("XMLHttpRequest : " + XMLHttpRequest.status);
			console.log("textStatus     : " + textStatus);
			console.log("errorThrown    : " + errorThrown.message);
		}
	});
});