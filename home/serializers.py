from rest_framework import serializers
from .models import Image

class imageserializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image','uploaded_at')