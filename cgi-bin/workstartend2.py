#-------------------------------------------------------------------------------
# Name:        workstartend2
# Purpose:
#
# Author:      shibano
#
# Created:     20/06/2020
# Copyright:   (c) shibano 2020
# Licence:     <your licence>
#-------------------------------------------------------------------------------

# -*- coding: utf-8 -*-

import cgi
import cgitb
import os
import json
import sys
import io
import urllib.parse
import codecs
cgitb.enable()

data = sys.stdin.readline()#leadline()?
params = json.loads(data)

inpid = params["id"]
inppw = params["pw"]
year = params["year"]
month = params["month"]
day = params["day"]
hour = params["hour"]
minute = params["minute"]
button = params["button"]

sentence = " , " + inpid + " , " + inppw + " , " + str(year) + " , " + str(month)

if button == 0:
    response = { "res" : "出勤しました" + sentence }
else:
    response = { "res" : "退勤しました" + sentence }

print('Content-Type: text/json; charset=utf-8\r\n')
print(json.JSONEncoder().encode(response))
