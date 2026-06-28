# backend/services/models.py

from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    icon = models.CharField(max_length=50)
    color = models.CharField(max_length=7, default="#2563EB")
    order = models.IntegerField(default=0)
    short_description = models.CharField(max_length=200)
    full_description = models.TextField()
    features = models.JSONField(default=list)
    tech_stack = models.JSONField(default=list)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['order', 'name']