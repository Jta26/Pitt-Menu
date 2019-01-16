# This file will take in an image and return it formatted as a series of images using PIL. These images will be ready for reading with PyTesseract.
from PIL import Image
from pdf2image import convert_from_path
from skimage.io import imread
from skimage.morphology import convex_hull_image
from skimage.color import rgb2gray
import numpy as np
import urllib.request as urllib
import os

def main():
    DownloadFile('https://www.metzupb.com/uploads/1/0/6/5/106571175/week_2_bl.pdf')
    pages = convert_from_path('./file.pdf', 500)
    for page in pages:
        page.save('img.png', 'PNG')
    CropWhiteSpace('./img.png')
    

def DownloadFile(url):
    response = urllib.urlopen(url)
    file = open("file.pdf", 'wb')
    file.write(response.read())
    file.close()
    print('file downloaded')

def CropWhiteSpace(image_dir):
    im = imread(image_dir)
    im1 = 1 - rgb2gray(im)
    threshold = 0.5
    im1[im1 <= threshold] = 0
    im1[im1 > threshold] = 1
    chull = convex_hull_image(im1)
    imageBox = Image.fromarray((chull * 255).astype(np.uint8)).getbbox()
    cropped = Image.fromarray(im).crop(imageBox)
    cropped.save('./img.png')
    cropped.close()
    print('cropped whitespace')

if __name__ == '__main__':
    main()
