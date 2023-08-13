import requests

url = "https://api.ocr.space/parse/image"

payload = {}
files=[
  ('',('fRLzZ.png',open('/C:/Users/acer/Downloads/fRLzZ.png','rb'),'image/png'))
]
headers = {
  'apikey': 'K81873386588957'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
