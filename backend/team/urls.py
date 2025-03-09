from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('get_all_team_members/', views.get_all_team_members, name='get_all_team_members'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
