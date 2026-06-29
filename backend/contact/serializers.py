from rest_framework import serializers
from .models import ContactMessage, HeroSection

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'phone', 'product', 'message']

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = ['id', 'title', 'subtitle', 'tag', 'image', 'btn_text', 'btn_link']