from django.db import models

class PartnerType(models.Model):
    name = models.CharField(max_length=50)  # "Technology", "Channel", "Strategic", etc.
    slug = models.SlugField(unique=True)
    order = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['order']

class Partner(models.Model):
    # Basic
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    partner_type = models.ForeignKey(PartnerType, on_delete=models.CASCADE, related_name='partners')
    
    # Tech partners
    category = models.CharField(max_length=50, blank=True)
    logo = models.CharField(max_length=20, blank=True)
    color = models.CharField(max_length=7, default="#2563EB")
    description = models.TextField()
    badge = models.CharField(max_length=50, blank=True)
    
    # Channel partners
    icon = models.CharField(max_length=50, blank=True)
    benefits = models.JSONField(default=list)
    
    # Display
    order = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['partner_type', 'order', 'name']