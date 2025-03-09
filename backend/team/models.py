from django.db import models

# Create your models here.

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length = 200)
    rank = models.IntegerField()
    profile_pic = models.ImageField(upload_to='team/images')
    tenure_year = models.IntegerField()
    linkedin_url = models.URLField(blank = True)
    instagram_url = models.URLField(blank = True)

    def __str__(self):
        return self.name

    


