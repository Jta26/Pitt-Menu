from bs4 import BeautifulSoup
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from tabula import read_pdf
import UploadData
import pdftotext
import pandas as pd
import requests
import arrow
import datetime
import re
import os
import shutil
import glob

def main():
        #Clear the Files Folder.
        ClearFiles()
        #Determine the source website that has the PDFs.
        source = 'https://www.metzupb.com/koa.html'
        #Use urllib to seperate URL into component parts.
        srcParsed = urlparse(source)
        #Determine Domain name from parsed url e.g. https://www.metzupb.com
        result = '{uri.scheme}://{uri.netloc}'.format(uri=srcParsed)
        #Get the PDF files from the source website.
        refs = GetSoupReferences(source)
        #Establish files list.
        files = []
        #Loop through PDF urls found in source, Download them, then add them to the files list.
        for ref in refs:
                files.append(DownloadFile(result + ref))
        #Establish the different lists for types of meals. 
        dinnerDataframe = []
        lunchDataframe = []
        #Grab Files from Files folder
        Folderfiles = glob.glob('Files/*')
        #Loop through files
        for file in Folderfiles:
                #Determine the menu type e.g. "Lunch" or "Dinner"
                menuType = GetMenuType(file)
                if (menuType):
                        print('Dinner Menu Found')
                        dinnerDataframe = GetDataFrame(file)
                     
                else:
                        print('Lunch Menu Found')
                        lunchDataframe = GetDataFrame(file)
        #Loops through all columns in dataframe.
        for column in dinnerDataframe.columns:
                #Determines the date from the 0th item in the column.
                date = DetermineDate(dinnerDataframe[column][0]).format('YYYY-MM-DD')
                #Forwards the date, menutype, and list of items to the SQL upload script.
                UploadData.UploadMenu(date, False, dinnerDataframe[column][1:])
        for column in lunchDataframe.columns:
                date = DetermineDate(lunchDataframe[column][0]).format('YYYY-MM-DD')
                UploadData.UploadMenu(date, True, lunchDataframe[column][1:])
                
#Uses BeautifulSoup to scrape the source of the menus.
#Finds 'a' tags with strings that have .pdf files in them.
#Returns the value of the 'href' tag that links to the pdf
def GetSoupReferences(url):
        regex = re.compile('\/.*\.pdf')
        page = requests.get(url)
        soup = BeautifulSoup(page.text, 'html.parser')
        links = soup.find_all('a', {'href': regex})
        refs = []
        for link in links:
                refs.append(link['href'])
        return refs

#Takes in a URL and downloads the file at it.
def DownloadFile(url):
        response = urlopen(url)
        fileName = url.rsplit('/', 1)[1]
        file = open('Files/' + fileName, 'wb')
        file.write(response.read())
        file.close()
        print(fileName + ' Downloaded')
        return fileName
#Deletes all files in the Files Folder.
def ClearFiles():
        filesDir = './Files/'
        if (os.path.exists(filesDir)):
                shutil.rmtree(filesDir)
        os.mkdir('./Files')
        

#Uses pdftotext to find keyword "dinner" in a pdf.
#If it doesn't have keyword "dinner", it must be breakfast/lunch.
def GetMenuType(file):
        with open(file, 'rb') as f:
                pdf = pdftotext.PDF(f)
                if "dinner" in str.lower(pdf[0]):
                        return True
                else:
                        return False
#Uses Tabula to convert pdf to pandas Dataframe.
def GetDataFrame(file):
        df = read_pdf(file)
        df = pd.DataFrame(df)
        df = df.fillna('')
        return df
#This one's kinda complex
def DetermineDate(date):
        #months as 3 character keywords.
        monthKeywords = ('jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec')
        #init month and day variables
        month = ''
        day = ''
        #go though all the month keywords and check if they are in the data parameter.
        #If they are, use Python datetime to convert abbrivation to full month name.
        for abbr in monthKeywords:
            if abbr in date.lower():
                month = datetime.datetime.strptime(abbr, '%b').strftime('%B')
        #Convert find string for int and convert it to valid date number.
        for i in range(32):
            if str(i) in date.lower():
                if(i < 10):
                    day = '0' + str(i)
                else:
                    day = str(i)
        #use Arrow to standardize date data.
        date = arrow.get(month + ' ' + day + ' ' + arrow.now().format('YYYY'), 'MMMM DD YYYY')
        #If the date is in the past by at least 7 days, assume it's next year.
        if (date <= arrow.now().shift(days=-7)):
            date = date.shift(years=1)
        #return the formatted date.
        return date
if __name__ == '__main__':
    main()