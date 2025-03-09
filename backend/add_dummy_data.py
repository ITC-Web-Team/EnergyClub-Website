import os
import django
from datetime import datetime, timedelta
from django.utils import timezone

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'energy_club_backend.settings')
django.setup()

from team.models import TeamMember
from events.models import Event
from projects.models import Project

# Clear existing data
TeamMember.objects.all().delete()
Event.objects.all().delete()
Project.objects.all().delete()

# Add Team Members
team_members = [
    {
        "name": "Dr. Rahul Sharma",
        "position": "Faculty Advisor",
        "tenure_year": 2023,
        "linkedin_url": "https://linkedin.com/in/rahul-sharma",
        "rank": 1
    },
    {
        "name": "Priya Patel",
        "position": "President",
        "tenure_year": 2024,
        "linkedin_url": "https://linkedin.com/in/priya-patel",
        "instagram_url": "https://instagram.com/priya.energy",
        "rank": 2
    },
    {
        "name": "Aditya Kumar",
        "position": "Vice President",
        "tenure_year": 2024,
        "linkedin_url": "https://linkedin.com/in/aditya-kumar",
        "rank": 3
    },
    {
        "name": "Neha Singh",
        "position": "Technical Head",
        "tenure_year": 2024,
        "linkedin_url": "https://linkedin.com/in/neha-singh",
        "instagram_url": "https://instagram.com/neha.tech",
        "rank": 4
    },
    {
        "name": "Arjun Reddy",
        "position": "Events Coordinator",
        "tenure_year": 2024,
        "instagram_url": "https://instagram.com/arjun.events",
        "rank": 5
    },
    {
        "name": "Zara Khan",
        "position": "Media Head",
        "tenure_year": 2024,
        "linkedin_url": "https://linkedin.com/in/zara-khan",
        "instagram_url": "https://instagram.com/zara.creates",
        "rank": 6
    },
    # Past Year Members
    {
        "name": "Rohan Mehta",
        "position": "President",
        "tenure_year": 2023,
        "linkedin_url": "https://linkedin.com/in/rohan-mehta",
        "rank": 7
    },
    {
        "name": "Ananya Gupta",
        "position": "Vice President",
        "tenure_year": 2023,
        "linkedin_url": "https://linkedin.com/in/ananya-gupta",
        "rank": 8
    },
    {
        "name": "Karthik Raja",
        "position": "Technical Head",
        "tenure_year": 2023,
        "linkedin_url": "https://linkedin.com/in/karthik-raja",
        "rank": 9
    }
]

for member in team_members:
    TeamMember.objects.create(**member)

# Add Events (Past and Upcoming)
events = [
    {
        "title": "Energy Innovation Summit 2024",
        "description": "Annual summit bringing together industry experts, researchers, and students to discuss the future of sustainable energy. Features keynote speakers from leading energy companies and research institutions.",
        "created_at": timezone.now() + timedelta(days=30),
        "instagram_url": "https://instagram.com/energy_summit_2024"
    },
    {
        "title": "Solar Panel Workshop",
        "description": "Hands-on workshop on solar panel installation and maintenance, led by industry professionals. Learn about the latest technologies in solar energy and gain practical experience.",
        "created_at": timezone.now() + timedelta(days=15),
        "instagram_url": "https://instagram.com/solar_workshop"
    },
    {
        "title": "Green Campus Initiative Launch",
        "description": "Launch of our new initiative to make IIT Bombay campus more energy-efficient and sustainable. Join us for the unveiling of our comprehensive plan and be part of this transformative journey.",
        "created_at": timezone.now() - timedelta(days=5),
        "instagram_url": "https://instagram.com/green_campus_iitb"
    },
    {
        "title": "Energy Policy Roundtable",
        "description": "Discussion on India's energy policies and their impact on sustainability goals. Expert panel featuring policymakers, academics, and industry leaders.",
        "created_at": timezone.now() - timedelta(days=20),
    },
    {
        "title": "Renewable Energy Hackathon",
        "description": "48-hour hackathon focused on developing innovative solutions for renewable energy challenges. Win exciting prizes and get a chance to implement your solutions on campus!",
        "created_at": timezone.now() - timedelta(days=25),
        "instagram_url": "https://instagram.com/energy_hackathon"
    },
    # Past Events
    {
        "title": "Wind Energy Symposium",
        "description": "A deep dive into wind energy technologies and their implementation in urban settings.",
        "created_at": timezone.now() - timedelta(days=60),
    },
    {
        "title": "Energy Conservation Week",
        "description": "Week-long series of events promoting energy conservation practices in daily life.",
        "created_at": timezone.now() - timedelta(days=90),
    }
]

for event in events:
    Event.objects.create(**event)

# Add Projects (Ongoing and Completed)
projects = [
    {
        "title": "Smart Energy Monitoring System",
        "description": "Developing an IoT-based system to monitor and optimize energy consumption across campus buildings. Real-time data analytics and automated control systems for efficient energy management.",
        "created_at": timezone.now() - timedelta(days=7),
        "pdf_path": "project_pdfs/smart_energy_monitoring.pdf"
    },
    {
        "title": "Sustainable Transportation Study",
        "description": "Research project analyzing the potential for electric vehicles and charging infrastructure on campus. Includes feasibility study and implementation roadmap.",
        "created_at": timezone.now() - timedelta(days=14),
        "pdf_path": "project_pdfs/sustainable_transportation.pdf"
    },
    {
        "title": "Solar-Powered Water Heaters",
        "description": "Implementation of solar water heating systems in student hostels to reduce electricity consumption. Pilot project showing 40% reduction in energy costs.",
        "created_at": timezone.now() - timedelta(days=21),
        "pdf_path": "project_pdfs/solar_water_heaters.pdf"
    },
    {
        "title": "Energy Awareness Campaign",
        "description": "Multi-phase campaign to promote energy conservation practices among students and staff. Includes workshops, competitions, and social media engagement.",
        "created_at": timezone.now() - timedelta(days=28),
        "pdf_path": "project_pdfs/energy_awareness.pdf"
    },
    {
        "title": "Waste-to-Energy Plant",
        "description": "Feasibility study and pilot project for converting campus waste into usable energy. Collaboration with Department of Environmental Science.",
        "created_at": timezone.now() - timedelta(days=35),
        "pdf_path": "project_pdfs/waste_to_energy.pdf"
    },
    # Completed Projects
    {
        "title": "LED Lighting Upgrade",
        "description": "Campus-wide replacement of traditional lighting with energy-efficient LED systems. Resulted in 30% reduction in lighting-related energy consumption.",
        "created_at": timezone.now() - timedelta(days=120),
        "pdf_path": "project_pdfs/led_lighting.pdf"
    },
    {
        "title": "Energy Audit Framework",
        "description": "Development of comprehensive energy audit framework for educational institutions. Now being adopted by other universities.",
        "created_at": timezone.now() - timedelta(days=150),
        "pdf_path": "project_pdfs/energy_audit.pdf"
    }
]

# Create PDF directory if it doesn't exist
import os
from django.conf import settings
from django.core.files import File

pdf_dir = os.path.join(settings.MEDIA_ROOT, 'project_pdfs')
os.makedirs(pdf_dir, exist_ok=True)

# Create a sample PDF file for each project
for project_data in projects:
    pdf_path = project_data.pop('pdf_path')
    full_path = os.path.join(settings.MEDIA_ROOT, pdf_path)
    
    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    
    # Create a simple text file as a placeholder for PDF
    with open(full_path, 'w') as f:
        f.write(f"Sample PDF for {project_data['title']}\n\n")
        f.write(f"Description: {project_data['description']}\n")
        f.write(f"Created: {project_data['created_at']}\n")
    
    # Create the project with the PDF file
    project = Project.objects.create(**project_data)
    
    # Add the PDF file
    with open(full_path, 'rb') as f:
        project.pdf.save(os.path.basename(pdf_path), File(f))
    
    project.save()

print("Successfully added dummy data!")
