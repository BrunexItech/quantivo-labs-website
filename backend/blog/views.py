from rest_framework import viewsets
from rest_framework.response import Response
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing blog posts
    """
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        featured = self.request.query_params.get('featured')
        
        if category and category != 'All':
            queryset = queryset.filter(category=category)
        if featured == 'true':
            queryset = queryset.filter(featured=True)
        
        return queryset