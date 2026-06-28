from django.contrib import admin
from .models import PartnerType, Partner

@admin.register(PartnerType)
class PartnerTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'order']
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ['order']

@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['name', 'partner_type', 'is_published']
    list_filter = ['partner_type', 'is_published']
    search_fields = ['name', 'description']
    list_editable = ['is_published']