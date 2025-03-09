from django.http import JsonResponse
from .models import TeamMember
from django.db.models import F

# Create your views here.
def get_all_team_members(request):
    team_members = TeamMember.objects.all().order_by('-tenure_year', 'rank')
    
    # Group members by year
    members_by_year = {}
    for member in team_members:
        year = member.tenure_year
        if year not in members_by_year:
            members_by_year[year] = []
        
        members_by_year[year].append({
            'name': member.name,
            'position': member.position,
            'linkedin_url': member.linkedin_url,
            'instagram_url': member.instagram_url,
            'profile_pic': member.profile_pic.url if member.profile_pic else None,
            'rank': member.rank
        })
    
    # Convert to list and sort by year
    response = []
    for year in sorted(members_by_year.keys(), reverse=True):
        response.append({
            'year': year,
            'members': sorted(members_by_year[year], key=lambda x: x['rank'])
        })
    
    return JsonResponse(response, safe=False)
