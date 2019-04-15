# Pitt-Menu
Repo for my undergraduate capstone project. The project is a fullstack application that parsers a PDF of the menu from my school's dining hall, and uploads it to a normalized database. The data is then used in a Node.JS REST API and delivered to multiple front-end apps. The front end apps include a mobile and desktop friendly React App, as well as a Google Home Action for getting the lunch and dinner menu for the day.


## Table of Contents 
 - [Python PDF Processor](#python-pdf-processor)
 - [MySQL Database](#mysql-database)
 - [Node.JS REST API](#nodejs-rest-api)
 - [React Web App](#react-web-app)
 - [Systems Architecture](#systems-architecture)
## Python PDF Processor <a name='python-pdf-processor'></a>
This part of the project is found under the [File Processor](https://github.com/Jta26/Menu-Parser/tree/master/FileProcessor) folder and is written in python. It downloads the university menus from a source link and differentiates between lunch and dinner menus. It then reads the items from the menus and uploads them to the MySql database.

To Run, install the dependenices using:

`pip install [dependency]`

Then:

`python3 FormatPdf.py`


### Python Dependencies
- [BeautifulSoup4](https://pypi.org/project/beautifulsoup4/)
- [Pandas](https://pandas.pydata.org/)
- [tabula-py](https://github.com/chezou/tabula-py)
- [pdftotext](https://pypi.org/project/pdftotext/)
- [Arrow](https://github.com/crsmithdev/arrow)

## MySQL Database <a name='mysql-database'></a>
Run the [SQL script](https://github.com/Jta26/Pitt-Menu/blob/master/Database/menu-parser.sql) in a database you have setup. 

Here is the ER Conceptual and Logical diagrams for the database.

#### Conceptual
![diagram](https://i.imgur.com/ZJtIoS2.png)
#### Logical
![diagram2](https://i.imgur.com/Oql4TTv.png)

## Node.JS REST API <a name='nodejs-rest-api'></a>
the endpoint for the Node.JS REST API is https://api.joelaustin.net.

The requests that you can make the API are as follows.

### Menu for a specific date

`GET https://api.joelaustin.net/menu/[DATE]?type=[TYPE]`

Date: e.g. '2019-02-20

Type: e.g. 1 (dinner) OR 0 (lunch/breakfast)

### Data for a specific item by item ID

`GET https://api.joelaustin.net/item/[ITEMID]`

Item IDs range from 1 to however many items are in the database.

### Rating for specific item

Honestly, I don't know why i didn't just include this with the one above. 1 request > 2 requests.

`GET https://api.joelaustin.net/ratings/[ITEMID]`

### Google Actions Webhook

This is a required endpoint for Google Assistant Actions and Dialogflow.

`POST https://api.joelaustin.net/google`

### Invoking the Python Processor

When a GET request is made to this address it creates a child process that runs the python script that reads the PDF. This is automatically called every monday at 11AM EST.

`GET https://api.joelaustin.net/invoke`

## React Web App <a name='react-web-app'></a>

The Pitt Menu Web Application is built using React. It uses a mix of Semantic UI and my own styles and components. It can be visited below.

https://pitt-menu.joelaustin.net


## System Architecture <a name='systems-architecture'></a>

Below is a diagram that outlines the system architecture for Pitt Menu. The data is stored in a mix of MySQL and Google Firebase. Firebase Mostly handles the user authentication.

![test](https://i.imgur.com/JmRH8A7.png)
`
## About the Developer

My name is Joel Austin, I am a developer from the University of Pittsburgh.

Please visit my Website at http://JoelAustin.Net