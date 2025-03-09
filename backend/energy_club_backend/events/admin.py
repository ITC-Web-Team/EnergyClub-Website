from django.contrib import admin
from .models import Events
# Register your models here.

class Events_Admin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    readonly_fields = ('created_at',) 

admin.site.register(Events, Events_Admin)