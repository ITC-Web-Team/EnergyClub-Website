from django.contrib import admin
from .models import Project
# Register your models here.

class Project_Admin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    readonly_fields = ('created_at',) 


admin.site.register(Project, Project_Admin)