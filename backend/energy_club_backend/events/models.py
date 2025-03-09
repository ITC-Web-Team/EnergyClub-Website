from django.db import models

# Create your models here.
class Events(models.Model):
    title = models.CharField(max_length=400)
    description = models.TextField()
    img = models.ImageField(upload_to='events/images')
    instagram_url = models.URLField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title