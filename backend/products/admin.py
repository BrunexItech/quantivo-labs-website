from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'order']
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ['order']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'featured', 'is_published', 'order']
    list_filter = ['category', 'featured', 'is_published']
    search_fields = ['name', 'desc']
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ['featured', 'is_published', 'order']