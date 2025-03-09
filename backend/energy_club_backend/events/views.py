from .models import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def get_events(request):
    if request.method == "GET":
        events = Event.objects.all().order_by('-created_at')

        events_list = [
        {
            "title": event.title,
            "description": event.description,
            "img": event.img.url if event.img else None,
            "instagram_url": event.instagram_url,
            "created_at": event.created_at.strftime('%d-%m-%Y') # if time is also needed then - ('%Y-%m-%d %H:%M:%S')
        } 
        for event in events
        ]

        return JsonResponse({"events": events_list}, safe = False) # safe= False, ensures no error come while sending a list in JsonResponse instead of a dictionary

    else:
        return JsonResponse({"error" : "Method not allowed"}, status = 400)