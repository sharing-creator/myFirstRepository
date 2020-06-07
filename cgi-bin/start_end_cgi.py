#-------------------------------------------------------------------------------
# Name:        start_end_cgi.py
# Purpose:
#
# Author:      shibano
#
# Created:     20/06/2020
# Copyright:   (c) shibano 2020
# Licence:     <your licence>
#-------------------------------------------------------------------------------

# coding: utf-8

import cgi
import cgitb
import os
import json
import sys
import io
import urllib.parse
import codecs
import MySQLdb
import html
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
cgitb.enable()

data = sys.stdin.readline()#leadline()?
params = json.loads(data)

connect = MySQLdb.connect(
        user='noshiba',
        passwd='shibano',
        host='25.76.165.90',
        db='timecard',
        charset='utf8',
        use_unicode=True)

cur = connect.cursor()

mode = params["mode"]

#mode0:始業終業ボタン関連 mode1:管理者かどうか mode2:ほかの人のデータ見る
if(mode == 0):#始業終業ボタン関連
    inpid = params["id"]
    inppw = params["pw"]
    year = params["year"]
    month = params["month"]
    day = params["day"]
    hour = params["hour"]
    minute = params["minute"]
    button = params["button"]

    cur.execute("select name from name_table where id = '" + inpid +"' and pw = '" + inppw + "';")
    rows = cur.fetchone()
    if rows is None:
        response = { "res" : "ID,PWが違います"}
        print("error desuyo",sys.stderr)
        print('Content-Type: text/json; charset=utf-8\r\n')
        print(json.JSONEncoder().encode(response))
        sys.exit()
    else:
        sentence = rows[0]

    if button == 0:
        response = { "res" : sentence + "さんが出勤しました" }
        cur.execute("insert into history_table (id, date, start) values ('" +  inpid + "', '" +  str(year) + "/" + str(month) + "/" + str(day) + "', '" + str(hour) + ":" + str(minute) + "');")
    else:
        response = { "res" : sentence + "さんが退勤しました" }
        cur.execute("update history_table set end='" + str(hour) + ":" + str(minute) + "' where id='" + inpid + "';")

    connect.commit()
    rows = cur.fetchone()

    print('Content-Type: text/json; charset=utf-8\r\n')
    print(json.JSONEncoder().encode(response))

elif(mode == 1):#管理者かどうか
    inpid = params["id"]
    inppw = params["pw"]

    #管理者かどうかのデータベース検索処理

else:#ほかの人のデータ検索
    inpid = params["id"]

    #なんかいろいろ検索できるように

cur.close()
connect.commit()
connect.close()
