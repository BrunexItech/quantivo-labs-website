from django.urls import path, include

urlpatterns = [
    path('products/', include('products.urls')),
    path('services/', include('services.urls')),
    path('blog/', include('blog.urls')),
    path('portfolio/', include('portfolio.urls')),
    path('testimonials/', include('testimonials.urls')),
    path('partners/', include('partners.urls')),
    path('contact/', include('contact.urls')),
    path('industries/', include('industries.urls')),
]