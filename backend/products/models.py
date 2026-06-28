from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    icon = models.CharField(max_length=10)
    color = models.CharField(max_length=7)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='categories/', blank=True, null=True)  # CHANGED to ImageField
    order = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['order', 'name']

class Product(models.Model):
    # Basic fields
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    
    # From Products.tsx page
    tag = models.CharField(max_length=50)
    tag_class = models.CharField(max_length=20, blank=True)
    desc = models.TextField()
    
    # From data/products.tsx
    description = models.TextField(blank=True)
    stat = models.CharField(max_length=100, blank=True)
    featured = models.BooleanField(default=False)
    
    # Extra fields from Products.tsx
    features = models.JSONField(default=list)
    stack = models.JSONField(default=list)
    
    # NEW FIELD - ADD THIS
    is_published = models.BooleanField(default=True)
    
    # Ordering
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['order', 'name']