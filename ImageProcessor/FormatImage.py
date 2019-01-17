# This file will take in an image and return it formatted as a series of images using PIL. These images will be ready for reading with PyTesseract.
from tabula import read_pdf
import urllib.request as urllib
import pandas as pd
import os

def main():
    DownloadFile('https://www.metzupb.com/uploads/1/0/6/5/106571175/week_2_bl.pdf')
    df = read_pdf('file.pdf')
    df = pd.DataFrame(df)
    df = df.dropna()
    for column in df.columns:
        print(df[column])
def DownloadFile(url):
    response = urllib.urlopen(url)
    file = open("file.pdf", 'wb')
    file.write(response.read())
    file.close()
    print('file downloaded')
    
if __name__ == '__main__':
    main()
