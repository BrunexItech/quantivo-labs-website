from django.db import models

class PortfolioCase(models.Model):
    # Basic
    product = models.CharField(max_length=200)
    client = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    
    # Content
    problem = models.TextField()
    solution = models.TextField()
    
    # Features (JSON array)
    features = models.JSONField(default=list)  # ['Agent banking network', 'Digital lending', ...]
    
    # Results (JSON array of objects)
    results = models.JSONField(default=list)  # [{"metric": "50+", "label": "Agent outlets"}, ...]
    
    # Tech stack (JSON array)
    stack = models.JSONField(default=list)  # ['Node.js', 'PostgreSQL', ...]
    
    # Display
    tag = models.CharField(max_length=50)  # "Digital Finance"
    tag_color = models.CharField(max_length=7, default="#4F46E5")
    gradient = models.CharField(max_length=100, blank=True)  # "from-indigo-500 to-blue-500"
    icon = models.CharField(max_length=50)  # Icon name
    order = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.product} - {self.client}"
    
    class Meta:
        ordering = ['order', '-created_at']
        verbose_name_plural = "Portfolio Cases"