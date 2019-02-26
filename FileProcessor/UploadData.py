import pymysql.cursors
import calendar
import datetime
import arrow
from termcolor import colored, cprint

def UploadMenu(date, menutype, items):
    connection = pymysql.connect(
    host='jta26-captstone-db.c9cjk2mrsd30.us-east-2.rds.amazonaws.com',
    user='admin',
    password='google951',
    db='menu_parser_db',
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor)
    
    try:
        with connection.cursor() as cursor:
            query = 'CALL InsertMenu(%s, %s, %s)'
            strMenuType = ''
            if not menutype: 
                strMenuType = 'Dinner'
            else :
                strMenuType = 'Breakfast/Lunch'
            print('\n' + '------------------------------------------------------------' + '\n' + colored('MENU: ', 'green') + date + ' ' + strMenuType + '\n' + '------------------------------------------------------------')
            cursor.execute(query, (date, menutype, arrow.get(date).format('dddd')))
            for item in items:
                if item == '':
                    continue
                if ',' in item:
                    print(colored('ITEM SKIPPED: ', 'red') + item + colored(' REASON: ', 'red') + 'Ambigious')
                    continue
                query = 'CALL InsertItem(%s)'
                cursor.execute(query, item)
                print(colored('ITEM: ', 'cyan') + item)
                query = 'CALL InsertMenuItem(%s, %s, %s)'
                cursor.execute(query, (date, menutype, item))
        connection.commit()
    finally:
        connection.close()
def InsertFoodItems(items):
    connection = pymysql.connect(
    host='menu-parser-db.cr6wut1qfi23.us-west-2.rds.amazonaws.com',
    user='admin',
    password='google951',
    db='menu_parser_db',
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            for item in items:
                query = 'CALL InsertItem(%s)'
                cursor.execute(query, item)
                print(item + ' Inserted')
        connection.commit()
    finally:
        connection.close()
