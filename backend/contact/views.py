from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage, HeroSection
from .serializers import ContactSerializer, HeroSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactSerializer
    
    def perform_create(self, serializer):
        contact = serializer.save()
        self.send_notifications(contact)
    
    def send_notifications(self, contact):
        admin_message = f"""
New Contact Form Submission:

Name: {contact.name}
Email: {contact.email}
Phone: {contact.phone or 'Not provided'}
Product: {contact.product or 'Not specified'}
Message: {contact.message}
        """
        send_mail(
            f'New Contact: {contact.name}',
            admin_message,
            settings.DEFAULT_FROM_EMAIL,
            ['quantivo.itech@gmail.com'],
            fail_silently=False,
        )
        
        client_message = f"""
Dear {contact.name},

Thank you for contacting Quantivo Labs. We have received your message and our team will get back to you within 24 hours.

Best regards,
Quantivo Labs Team
        """
        send_mail(
            'Thank you for contacting Quantivo Labs',
            client_message,
            settings.DEFAULT_FROM_EMAIL,
            [contact.email],
            fail_silently=False,
        )

class HeroListView(generics.ListAPIView):
    queryset = HeroSection.objects.filter(is_active=True)
    serializer_class = HeroSerializer