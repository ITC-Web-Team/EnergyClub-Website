from django.contrib import admin
from .models import TeamMember
# Register your models here.

class TeamMember_Admin(admin.ModelAdmin):
    list_display = ('position', 'name', 'tenure_year') 

admin.site.register(TeamMember, TeamMember_Admin)