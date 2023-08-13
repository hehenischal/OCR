import requests
from django.shortcuts import render
from api_keys import API_KEY
from .forms import ImageForm

def index(request):
    if request.method == 'POST':
        
            image = request.FILES.get('image')
            url = "https://api.ocr.space/parse/image"
            payload = {}
            files = [
                ('', (image.name, image.file, image.content_type))
            ]
            headers = {
                'apikey': API_KEY,
            }
            response = requests.post(url, headers=headers, data=payload, files=files)
            
            data = response.json()
            print(data)
            
            parsed_results = data.get('ParsedResults', [])
            if parsed_results:
                extracted_text = parsed_results[0].get('ParsedText', 'No text found!')
            else:
                extracted_text = 'No text found!'
            form = ImageForm(request.POST, request.FILES)
            if form.is_valid():
                image = form.cleaned_data['image']
                print("form is valid & image size is" + 
                      str(image.size) + "it's name is " + 
                      image.name + "and it's content type is " + 
                      image.content_type + "it's location is " + 
                      str(image.file))
                form.save()
            
            context = {
                'extracted_text': extracted_text,
                'form' : form,
            }
            return render(request, 'index.html', context)

    form = ImageForm()
    context = {
        'form': form
    }
    return render(request, 'index.html', context)