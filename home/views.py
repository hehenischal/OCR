import requests
from django.shortcuts import render
from api_keys import API_KEY

def index(request):
    if request.method == 'POST':
        image = request.FILES.get('image')

        if image:
            url = 'https://api.ocr.space/parse/image'
            payload = {
                'apikey': API_KEY,
            }
            
            files = {
                'file': (image.name, image, image.content_type),
            }

            response = requests.post(url, data=payload, files=files)
            data = response.json()
            print(data)

            if 'ParsedResults' in data and len(data['ParsedResults']) > 0:
                extracted_text = data['ParsedResults'][0]['ParsedText']
                context = {
                    'extracted_text': extracted_text,
                    'image': image,
                }
                return render(request, 'index.html', context)
            else:
                error_message = "Failed to extract text. Please check the uploaded image."
                context = {
                    'error_message': error_message,
                    'image': image,
                }
                return render(request, 'index.html', context)

    return render(request, 'index.html')

