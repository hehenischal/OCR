# OCR 
### Optical Character Recognition
- by [**@hehenischal**](https://github.com/hehenischal)

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


