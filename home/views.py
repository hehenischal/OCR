import requests
from django.shortcuts import render
from .forms import ImageForm
import os
from .models import Image
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import imageserializer

def index(request):
    if request.method == 'POST':
        
            image = request.FILES.get('image')
            url = "https://api.ocr.space/parse/image"
            payload = {}
            files = [
                ('', (image.name, image.file, image.content_type))
            ]

            headers = {
                'apikey': os.getenv('API_KEY'),
            }
            response = requests.post(url, headers=headers, data=payload, files=files)
            
            data = response.json()
            print(data)
            
            parsed_results = data.get('ParsedResults', [])
            if parsed_results:
                extracted_text = parsed_results[0].get('ParsedText', 'No text found!')
                text_overlay = parsed_results[0].get('TextOverlay', {})
                lines = text_overlay.get('Lines', [])
            else:
                extracted_text = 'No text found!'
            
            
            if form.is_valid():
                imag = Image.objects.create(image = image)
                imag.save()
            
            context = {
                'extracted_text': extracted_text,
                'form' : form,
                'image': image
            }
            return render(request, 'index.html', context)

    form = ImageForm()
    context = {
        'form': form
    }
    return render(request, 'index.html', context)   


@api_view(['POST', 'GET'])
def api_post(request):
    if request.method == 'GET':
        data = {
        'status': '200',
        'message': 'success',
        'data': 'successfully hit the api endpoint',
        }
        return Response(data)
    if request.method == 'POST':
        image = request.FILES.get('image')
        url = "https://api.ocr.space/parse/image"
        payload = {}
        files = [
            ('', (image.name, image.file, image.content_type))
        ]
        headers = {
            'apikey': os.getenv('API_KEY'),
        }
        response = requests.post(url, headers=headers, data=payload, files=files)
        data = response.json()
        parsed_results = data.get('ParsedResults', [])
        if parsed_results:
            extracted_text = parsed_results[0].get('ParsedText', 'No text found!')
        context={   
            'status': '200',
            'message': 'success',
            'data': extracted_text,
        }   
        if image:
            imag = Image.objects.create(image = image)
            imag.save()
            allimages= Image.objects.all()
            serializer = imageserializer(allimages, many=True)
            context['images'] = serializer.data
        return Response(context)
