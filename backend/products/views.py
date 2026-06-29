from rest_framework import viewsets
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing categories
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing products
    """
    queryset = Product.objects.filter(is_published=True)
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        featured = self.request.query_params.get('featured')
        
        if category:
            queryset = queryset.filter(category__slug=category)
        if featured == 'true':
            queryset = queryset.filter(featured=True)
        
        return queryset