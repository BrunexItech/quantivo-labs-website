from django.urls import path
from .views import ContactCreateView, HeroListView

urlpatterns = [
    path('', ContactCreateView.as_view(), name='contact-create'),
    path('hero/', HeroListView.as_view(), name='hero-list'),
]