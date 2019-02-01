import pymysql.cursors
import calendar
import datetime
import arrow

def UploadMenu(date, menutype, items):
    connection = pymysql.connect(
    host='menu-parser-db.cr6wut1qfi23.us-west-2.rds.amazonaws.com',
    user='admin',
    password='google951',
    db='menu_parser_db',
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            query = 'CALL InsertMenu(%s, %s, %s)'
            test = ''
            if menutype: 
                test = 'Dinner'
            else :
                test = 'Breakfast/Lunch'
            print('MENU: ' + date + ' ' + test + ' Inserted' + '\n' + '------------------------------------------------------------')
            cursor.execute(query, (date, menutype, arrow.get(date).format('dddd')))
            for item in items:
                if item == '':
                    continue
                query = 'CALL InsertItem(%s)'
                cursor.execute(query, item)
                print(item + ' Inserted')
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
