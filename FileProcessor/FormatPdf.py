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
import glob

def main():
        ClearFiles()
        source = 'https://www.metzupb.com/koa.html'
        srcParsed = urlparse(source)
        result = '{uri.scheme}://{uri.netloc}'.format(uri=srcParsed)
        refs = GetSoupReferences(source)
        files = []
        for ref in refs:
                files.append(DownloadFile(result + ref))
        dinnerDataframe = []
        lunchDataframe = []
        Folderfiles = glob.glob('Files/*')
        for file in Folderfiles:
                menuType = GetMenuType(file)
                print(menuType)
                if (menuType):
                        dinnerDataframe = GetDataFrame(file)
                     
                else:
                        lunchDataframe = GetDataFrame(file)
        for column in dinnerDataframe.columns:
                date = DetermineDate(dinnerDataframe[column][0]).format('YYYY-MM-DD')
                UploadData.UploadMenu(date, False, dinnerDataframe[column][1:])
                # UploadData.InsertFoodItems(dinnerDataframe[column][1:])

        for column in lunchDataframe.columns:
                date = DetermineDate(lunchDataframe[column][0]).format('YYYY-MM-DD')
                UploadData.UploadMenu(date, True, lunchDataframe[column][1:])
                # UploadData.InsertFoodItems(lunchDataframe[column][1:])
                



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
def DownloadFile(url):
        response = urlopen(url)
        fileName = url.rsplit('/', 1)[1]
        file = open('Files/' + fileName, 'wb')
        file.write(response.read())
        file.close()
        print(fileName + ' Downloaded')
        return fileName
        
def ClearFiles():
        files = glob.glob('Files/.*')
        for file in files:
                os.remove(file)
        print('Files Folder Cleared')

def GetMenuType(file):
        with open(file, 'rb') as f:
                pdf = pdftotext.PDF(f)
                if "dinner" in str.lower(pdf[0]):
                        return True
                else:
                        return False
def GetDataFrame(file):
        df = read_pdf(file)
        df = pd.DataFrame(df)
        df = df.fillna('')
        return df
def DetermineDate(date):
        monthKeywords = ('jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec')
        month = ''
        day = ''
        for abbr in monthKeywords:
            if abbr in date.lower():
                month = datetime.datetime.strptime(abbr, '%b').strftime('%B')
        for i in range(31):
            if str(i) in date.lower():
                if(i < 10):
                    day = '0' + str(i)
                else:
                    day = str(i)
        date = arrow.get(month + ' ' + day + ' ' + arrow.now().format('YYYY'), 'MMMM DD YYYY')
        if (date <= arrow.now().shift(days=-7)):
            date = date.shift(years=1)
        return date

if __name__ == '__main__':
    main()