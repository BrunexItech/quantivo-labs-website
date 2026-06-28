from django.db import models

class Testimonial(models.Model):
    # Author info
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    industry = models.CharField(max_length=50)
    initial = models.CharField(max_length=10)  # "J" for James
    
    # Content
    quote = models.TextField()
    metric = models.CharField(max_length=100)  # "40% more deals closed"
    color = models.CharField(max_length=7, default="#2563EB")
    
    # Display
    order = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name} - {self.company}"
    
    class Meta:
        ordering = ['order', 'created_at']