export const scheduleDays = [
  { id: 'day-01', label: 'DAY 01', theme: 'KICKOFF & CLOUD/WEB3', date: 'October 16', dateShort: '16 OCTOBER' },
  { id: 'day-02', label: 'DAY 02', theme: 'AI HACK & SYSTEM DESIGN', date: 'October 17', dateShort: '17 OCTOBER' },
  { id: 'day-03', label: 'DAY 03', theme: 'CODE FINALS & AWARDS', date: 'October 18', dateShort: '18 OCTOBER' },
];

export const scheduleCategories = [
  'All',
  'Keynote',
  'Workshop',
  'Talk',
  'Hackathon',
  'Competition',
  'Gaming/Fun',
];

export const scheduleSessions = [
  {
    id: 'session-01', day: 'day-01', time: '09:00–10:30 AM', category: 'Keynote', level: 'All Levels',
    title: 'Grand Opening & Keynote: The Future of Developer Ecosystems',
    description: 'Inauguration by GDG Leads & University Officials followed by a visionary keynote on AI-driven software development.',
    speaker: 'Dr. Ananya Patnaik', role: 'Lead Cloud Architect & GDG Mentor • Google Developer Student Clubs',
    location: 'Main Auditorium (Auditorium 101)',
  },
  {
    id: 'session-02', day: 'day-01', time: '11:00 AM–01:00 PM', category: 'Workshop', level: 'Intermediate',
    title: 'Hands-on Workshop: Building Multimodal AI Agents with Gemini',
    description: 'Step-by-step workshop constructing context-aware AI agents utilizing Gemini Pro API, Function Calling, and Python.',
    speaker: 'Rohan Samal', role: 'Senior AI Engineer • Google Cloud Ecosystem',
    location: 'Bansuri Guru Computer Lab 3',
  },
  {
    id: 'session-03', day: 'day-01', time: '02:00–04:00 PM', category: 'Workshop', level: 'All Levels',
    title: 'Serverless Web Apps with Next.js & Google Cloud Run',
    description: 'Deploy production-grade full-stack Next.js applications directly to Google Cloud Run with zero server management.',
    speaker: 'Subhashree Mohanty', role: 'Principal Frontend Engineer • Vercel / GDG Core',
    location: 'Seminar Hall B',
  },
  {
    id: 'session-04', day: 'day-01', time: '04:30–06:00 PM', category: 'Talk', level: 'Intermediate',
    title: 'Web3 & Cloud Security Tech Talk',
    description: 'Deep dive into secure cloud credentials, OAuth2, and decentralized trust systems.',
    speaker: 'Vikramaditya Dash', role: 'Cybersecurity Architect • Fortinet',
    location: 'Not specified',
  },
  {
    id: 'session-05', day: 'day-02', time: '09:30–10:30 AM', category: 'Hackathon', level: 'All Levels',
    title: 'AI/ML Hack Sprint Kickoff & Problem Statement Reveal',
    description: 'Unveiling the 24-Hour Hack Sprint challenges across Healthcare, FinTech, Smart Cities, and Sustainability.',
    speaker: 'Tekno Krraft Jury Panel', role: 'Hackathon Mentors • GDG ITER Chapter',
    location: 'Innovation Hub & Hack Zone',
  },
  {
    id: 'session-06', day: 'day-02', time: '11:00 AM–01:00 PM', category: 'Workshop', level: 'Advanced',
    title: 'System Design Bootcamp: Scalable Distributed Systems',
    description: 'Learn how to design systems handling millions of concurrent requests using Redis, Kafka, and GCP Load Balancers.',
    speaker: 'Amitabh Swain', role: 'Staff Engineer • Atlassian',
    location: 'Conference Room 204',
  },
  {
    id: 'session-07', day: 'day-02', time: '02:00–04:00 PM', category: 'Workshop', level: 'Beginner',
    title: 'Cross-Platform Flutter Bootcamp: Beautiful UIs with Firebase',
    description: 'Build an interactive real-time chat application with Flutter 3 and Firebase Cloud Firestore in 2 hours.',
    speaker: 'Priyanka Mishra', role: 'GDE Flutter & Mobile Lead • Google Developer Expert',
    location: 'Bansuri Guru Computer Lab 1',
  },
  {
    id: 'session-08', day: 'day-02', time: '07:00–09:00 PM', category: 'Gaming/Fun', level: 'All Levels',
    title: 'Tekno Gaming Night & LAN Valorant Showdown',
    description: 'Relax, unwind, and participate in esports battles, arcade VR stations, and fun mini-games with fellow builders.',
    speaker: 'GDG Gaming Guild', role: 'Event Hosts • ITER Esports Club',
    location: 'Student Activity Center (SAC)',
  },
  {
    id: 'session-09', day: 'day-03', time: '09:30 AM–12:30 PM', category: 'Competition', level: 'Advanced',
    title: 'Competitive Coding Championship Finals (KrraftCode 2026)',
    description: 'The top 50 shortlisted coders solve complex algorithmic problems under speed and memory constraints.',
    speaker: 'Algorithm Jury', role: 'CP Lead Judges • Codeforces / GDG',
    location: 'Central Computing Center',
  },
  {
    id: 'session-10', day: 'day-03', time: '10:00 AM–01:00 PM', category: 'Hackathon', level: 'All Levels',
    title: 'Hack Sprint Project Pitching & Live Demo Stage',
    description: 'Top 12 finalist teams pitch their working AI & Cloud prototypes to venture investors and tech leaders.',
    speaker: 'Venture & Tech Jury', role: 'Judges & VCs • Techstars & GDG',
    location: 'Main Auditorium Stage',
  },
  {
    id: 'session-11', day: 'day-03', time: '02:30–05:00 PM', category: 'Keynote', level: 'All Levels',
    title: 'Grand Valedictory, Awards & Closing Ceremony',
    description: 'Celebration of winners across Hackathon and Coding contests, distribution of certificates, swags, and closing remarks.',
    speaker: 'Prof. (Dr.) Pradeep Kumar Sahoo', role: 'Dean & GDG Faculty Advisor • SOA, ITER Chapter',
    location: 'Main Campus Grounds / Open Air Theatre', additionalLocation: 'Main Auditorium',
  },
];
