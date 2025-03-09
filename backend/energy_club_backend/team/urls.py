from django.contrib import admin
from django.urls import path, include
from team import views
from energy_club_backend import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.get_team, name='get_team'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
