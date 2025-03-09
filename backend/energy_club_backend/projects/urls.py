from django.contrib import admin
from django.urls import path, include
from projects import views
from energy_club_backend import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.get_all_projects, name = 'get_all_projects'),
    path('project/home', views.projects_home, name = 'projects_home'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)