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

def query():
    print(q,file=sys.stderr)
    connect = MySQLdb.connect(
        user='noshiba',
        passwd='shibano',
        host='25.76.165.90',
        db='timecard',
        charset='utf8',
        use_unicode=True)
    cur = connect.cursor()
    cur.execute("select name from name_table where id = 'noshiba1';")

    return cur.fetchone()

    cur.close()
    connect.commit()
    connect.close()

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

    rows = query()
    sentence = rows[0]

    if button == 0:
        response = { "res" : "出勤しました" + sentence }
    else:
        response = { "res" : "退勤しました" + sentence }

    print('Content-Type: text/json; charset=utf-8\r\n')
    print(json.JSONEncoder().encode(response))

elif(mode == 1):#管理者かどうか
    inpid = params["id"]
    inppw = params["pw"]

    #管理者かどうかのデータベース検索処理

else:#ほかの人のデータ検索
    inpid = params["id"]

    #なんかいろいろ検索できるように
