from django.contrib import admin
from .models import Industry

@admin.register(Industry)
class IndustryAdmin(admin.ModelAdmin):
    list_display = ['name', 'order', 'is_published']
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ['order', 'is_published']