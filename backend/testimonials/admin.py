from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'industry', 'is_published']
    list_filter = ['industry', 'is_published']
    list_editable = ['is_published']