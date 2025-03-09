from .models import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def get_team(request):
    if request.method == "GET":
        team_members = TeamMember.objects.all().order_by('-tenure_year','-rank') # sorting fist based on tenure and then on rank both in descending order

        team_member_list = [
        {
            "name": team_member.name,
            "position": team_member.position,
            "profile_pic": team_member.profile_pic.url if team_member.profile_pic else None,
            "tenure_year": team_member.tenure_year,
            "linkedin_url": team_member.linkedin_url,
            "instagram_url": team_member.instagram_url

        } 
        for team_member in team_members
        ]

        return JsonResponse({"Team_Members": team_member_list}, safe = False) # safe= False, ensures no error come while sending a list in JsonResponse instead of a dictionary

    else:
        return JsonResponse({"error" : "Method not allowed"}, status = 400)
