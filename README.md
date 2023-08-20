# OCR 
### Optical Character Recognition
- [**@hehenischal**](https://github.com/hehenischal)
- [**@saagarbhujel**](https://github.com/saagarbhujel)

## What is OCR?
Optical Character Recognition (OCR) is the process of electronically extracting text from images or any documents like PDF and reusing it in a variety of ways such as full text searches. OCR is a field of research in pattern recognition, artificial intelligence and computer vision.


## How to use OCR locally?
- Clone this repository
```bash
git clone
```
- create a virtual environment
```bash
python3 -m venv env
```
- activate the virtual environment
```bash
 env/bin/activate
```
- install the required packages
```bash
pip install -r requirements.txt
```
- get your api key from [ocr.space](https://ocr.space/ocrapi)

-  Copy the "api_keys sample.py" and rename it to api_keys.py
-  paste your api key in api_keys.py
- create super user
```bash
python manage.py createsuperuser
```
- runserver
```bash
python manage.py runserver
```
- Open the browser and go to http://localhost:8000/
- Login with your super user credentials

# API Documentations

## API endpoints
[https://ocr.nischallamichhane.com.np/api](https://ocr.nischallamichhane.com.np/api)


## API request methods
- POST
- GET

## API request parameters
**image** *{required for POST}*

#   About the project: 
This is a hobby project made using django as the framework, and next.js as the frontend. The project is hosted on a Vercel. The project is made to learn about OCR and how it works with API from OCR space. 
@saagarbhujel has done all the work on the next.js frontend. His code is on the OCR-front branch. the backend code is on the main branch(django templtes frontend is also there). I didnt originally intend to make API. When I was making the project, I thought it would be cool to make an API for the project(and also the frontend required it). So I made it. I have made the API using django rest framework. The API is hosted on vercel. 

# Contributors: 
 [**@hehenischal**](https://github.com/hehenischal)
 [**@saagarbhujel**](https://github.com/saagarbhujel)




