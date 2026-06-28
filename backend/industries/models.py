from django.db import models

class Industry(models.Model):
    name = models.CharField(max_length=100)  # "Healthcare & Life Sciences"
    slug = models.SlugField(unique=True)
    emoji = models.CharField(max_length=10)  # "🏥"
    tag_color = models.CharField(max_length=7, default="#E11D48")
    accent_bg = models.CharField(max_length=7, default="#FFF1F2")
    
    headline = models.CharField(max_length=200)  # "Intelligent Healthcare IT for Africa"
    description = models.TextField()
    
    challenges = models.JSONField(default=list)  # ["Paper-based records", ...]
    solutions = models.JSONField(default=list)   # [{"title": "HMS", "desc": "..."}, ...]
    stats = models.JSONField(default=list)       # [{"val": "5+", "lbl": "Hospitals"}, ...]
    case_study = models.TextField(blank=True)
    
    order = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['order', 'name']
        verbose_name_plural = "Industries"