from django.contrib import admin
from .models import ContactMessage, HeroSection

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'product', 'is_read', 'is_replied', 'created_at']
    list_filter = ['is_read', 'is_replied']
    search_fields = ['name', 'email', 'message']
    list_editable = ['is_read', 'is_replied']

@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'order']
    list_editable = ['is_active', 'order']