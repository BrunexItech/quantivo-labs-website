from django.contrib import admin
from .models import PortfolioCase

@admin.register(PortfolioCase)
class PortfolioCaseAdmin(admin.ModelAdmin):
    list_display = ['product', 'client', 'tag', 'is_published']
    list_filter = ['tag', 'is_published']
    search_fields = ['product', 'client']
    prepopulated_fields = {'slug': ('product',)}
    list_editable = ['is_published']