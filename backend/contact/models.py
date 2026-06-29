from django.db import models

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    product = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    
    is_read = models.BooleanField(default=False)
    is_replied = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name} - {self.email}"
    
    class Meta:
        ordering = ['-created_at']

class HeroSection(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    tag = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='hero/', blank=True, null=True)
    btn_text = models.CharField(max_length=50, default='Get Started')
    btn_link = models.CharField(max_length=200, default='#contact-form')
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['order', 'id']