from .models import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def get_all_projects(request):
    if request.method == "GET":
        projects = Project.objects.all().order_by('-created_at')

        project_list = [
        {
            "title": project.title,
            "description": project.description,
            "img": project.img.url if project.img else None,
            "pdf": project.pdf.url if project.pdf else None,
            "created_at": project.created_at.strftime('%d-%m-%Y') # if time is also needed then - ('%d-%m-%Y %H:%M:%S')
        } 
        for project in projects
        ]

        return JsonResponse({"projects": project_list}, safe = False) # safe= False, ensures no error come while sending a list in JsonResponse instead of a dictionary

    else:
        return JsonResponse({"error" : "Method not allowed"}, status = 400)


@csrf_exempt
def projects_home(request):
    if request.method == "GET":
        projects = Project.objects.all().order_by('-created_at')[:3] #Get only 3 most recent projects

        project_list = [
        {
            "title": project.title,
            "description": project.description,
            "img": project.img.url if project.img else None,
            "pdf": project.pdf.url if project.pdf else None,
            "created_at": project.created_at.strftime('%d-%m-%Y') # if time is also needed then - ('%d-%m-%Y %H:%M:%S')
        } 
        for project in projects
        ]

        return JsonResponse({"projects": project_list}, safe = False) # safe= False, ensures no error come while sending a list in JsonResponse instead of a dictionary

    else:
        return JsonResponse({"error" : "Method not allowed"}, status = 400)
