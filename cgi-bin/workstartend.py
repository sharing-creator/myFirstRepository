#-------------------------------------------------------------------------------
# Name:        workstartend
# Purpose:
#
# Author:      shibano
#
# Created:     20/05/2020
# Copyright:   (c) shibano 2020
# Licence:     <your licence>
#-------------------------------------------------------------------------------

import cgi
import cgitb
cgitb.enable()

html_format = """
<!DOCTYPE html>
<html>
	<head>
		<title>タイムカード</title>
		<link rel="stylesheet" href="../css/input.css">
	</head>
	<body>
		<h1 id=title>
			タイムカード
		</h1>

		<div class=info>
			<span id="clock_date"></span>
			<span id="clock_time"></span>
		</div>

		<div class=info>
			<form action="../cgi-bin/workstartend.py" method="POST">
				id :
				<input type="text" name="inpid">
				<br>
				パスワード :
				<input type="text" name="inppw">
				<br>
				<input name="start" type="submit" value="出勤">
				<input name="end" type="submit" value="退勤">
			</form>
		</div>

		<div class="info">
			<input id="message" type="text" value="{0}" readonly="readonly">
		</div>
		<script src="../javascript/clock.js"></script>
	</body>
</html>
"""

form = cgi.FieldStorage();

inpid = form.getfirst('inpid')
inppw = form.getfirst('inppw')

if form.getfirst('start'):
    mes = '出勤した' + inpid + ',' + inppw

if form.getfirst('end'):
    mes = '退勤した' + inpid + ',' + inppw

html = html_format.format(mes)
print(html)

