const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Types
export interface TeamMember {
  name: string;
  position: string;
  linkedin_url?: string;
  instagram_url?: string;
  rank: number;
}

export interface YearGroup {
  year: number;
  members: TeamMember[];
}

export interface Project {
  title: string;
  description: string;
  img: string | null;
  pdf: string | null;
  created_at: string;
}

export interface Event {
  title: string;
  description: string;
  created_at: string;
  instagram_url?: string;
}

// API Functions
export async function getAllTeamMembers(): Promise<YearGroup[]> {
  const response = await fetch(`${API_BASE_URL}/team/get_all_team_members/`);
  if (!response.ok) {
    throw new Error('Failed to fetch team members');
  }
  return response.json();
}

export async function getAllEvents(): Promise<Event[]> {
  const response = await fetch(`${API_BASE_URL}/events/get_all_events/`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  const data = await response.json();
  return data.events || [];
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/get_all_projects/`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProjectsForHome(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/get_projects_for_home/`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects for home');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects for home:', error);
    throw error;
  }
}
