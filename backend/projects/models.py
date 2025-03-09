from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=400)
    description = models.TextField()
    img = models.ImageField(upload_to='projects/images')
    pdf = models.FileField(upload_to='projects/pdfs')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
