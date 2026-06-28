from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('api/', include('api.urls')),  
    path('products/', include('products.urls')),
    path('services/', include('services.urls')),
    path('blog/', include('blog.urls')),
    path('portfolio/', include('portfolio.urls')),
    path('testimonials/', include('testimonials.urls')),
    path('partners/', include('partners.urls')),
    path('contact/', include('contact.urls')),
    path('industries/', include('industries.urls')),
    path('chat/', include('chat.urls')),
]