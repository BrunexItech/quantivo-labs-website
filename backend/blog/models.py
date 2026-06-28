from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.TextField()
    content = models.TextField()
    category = models.CharField(max_length=50)
    category_color = models.CharField(max_length=7, default="#7C3AED")
    author = models.CharField(max_length=100)
    author_avatar = models.CharField(max_length=10)
    date = models.DateField(auto_now_add=True)
    read_time = models.CharField(max_length=20, default="5 min read")
    featured = models.BooleanField(default=False)
    image = models.URLField(max_length=500, blank=True)
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-date', '-created_at']