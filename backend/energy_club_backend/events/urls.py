from django.contrib import admin
from django.urls import path, include
from events import views
from energy_club_backend import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.get_events, name='get_events'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

