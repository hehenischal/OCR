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
                text_overlay = parsed_results[0].get('TextOverlay', {})
                lines = text_overlay.get('Lines', [])
            
                if lines:
                    # Calculate the bounding box of the detected text
                    x_coords = [line['Words'][0]['Left'] for line in lines]
                    y_coords = [line['Words'][0]['Top'] for line in lines]
                    min_x = min(x_coords)
                    max_x = max(x_coords)
                    min_y = min(y_coords)
                    max_y = max(y_coords)
                
                    # Calculate overlay position and size based on bounding box
                    overlay_left = min_x
                    overlay_top = min_y
                    overlay_width = max_x - min_x
                    overlay_height = max_y - min_y
                
                    context['overlay_left'] = overlay_left
                    context['overlay_top'] = overlay_top
                    context['overlay_width'] = overlay_width
                    context['overlay_height'] = overlay_height
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