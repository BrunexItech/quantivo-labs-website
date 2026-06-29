from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'excerpt', 'content', 
            'category', 'category_color', 'author', 'author_avatar',
            'date', 'read_time', 'featured', 'image', 
            'likes', 'comments', 'is_published'
        ]