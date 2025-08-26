import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NewsPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  publishDate: string;
  published: boolean;
}

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  status: 'ongoing' | 'completed' | 'upcoming';
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationUrl: string;
  image: string;
  type: 'upcoming' | 'past';
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email: string;
}

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  program: string;
  date: string;
}

interface DataContextType {
  news: NewsPost[];
  programs: Program[];
  events: Event[];
  team: TeamMember[];
  gallery: GalleryImage[];
  addNews: (post: Omit<NewsPost, 'id'>) => void;
  updateNews: (id: string, post: Partial<NewsPost>) => void;
  deleteNews: (id: string) => void;
  addProgram: (program: Omit<Program, 'id'>) => void;
  updateProgram: (id: string, program: Partial<Program>) => void;
  deleteProgram: (id: string) => void;
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

const generateId = () => Math.random().toString(36).substr(2, 9);

const initialNews: NewsPost[] = [
  {
    id: '1',
    title: 'STEM Bootcamp 2024 Success Story',
    slug: 'stem-bootcamp-2024-success-story',
    content: 'Our recent STEM bootcamp was a tremendous success, with over 200 students participating in hands-on robotics and programming workshops. Students learned fundamental programming concepts using Scratch and Python, while also building their own robots using Arduino microcontrollers. The enthusiasm and creativity displayed by our young participants was truly inspiring.',
    excerpt: 'Our recent STEM bootcamp was a tremendous success, with over 200 students participating in hands-on robotics and programming workshops.',
    featuredImage: 'https://images.pexels.com/photos/8197455/pexels-photo-8197455.jpeg',
    author: 'Dr. Kwame Asante',
    publishDate: '2024-01-15',
    published: true
  },
  {
    id: '2',
    title: 'New Partnership with Tech Giants',
    slug: 'new-partnership-with-tech-giants',
    content: 'We are excited to announce our new partnership with leading technology companies to bring more resources and opportunities to KEEA district students. This collaboration will provide access to cutting-edge technology, mentorship programs, and internship opportunities for our brightest minds.',
    excerpt: 'We are excited to announce our new partnership with leading technology companies to bring more resources and opportunities to KEEA district students.',
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    author: 'Sarah Mensah',
    publishDate: '2024-01-10',
    published: true
  }
];

const initialPrograms: Program[] = [
  {
    id: '1',
    title: 'Robotics Bootcamp',
    description: 'Intensive 2-week program teaching students Arduino programming and robot building',
    image: 'https://images.pexels.com/photos/8197455/pexels-photo-8197455.jpeg',
    category: 'Robotics',
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Coding for Kids',
    description: 'Introduction to programming using Scratch and basic Python concepts',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    category: 'Programming',
    date: '2024-02-01',
    status: 'ongoing'
  },
  {
    id: '3',
    title: 'Tech Fair 2024',
    description: 'Annual technology fair showcasing student projects and innovations',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    category: 'Exhibition',
    date: '2024-03-15',
    status: 'upcoming'
  }
];

const initialEvents: Event[] = [
  {
    id: '1',
    title: 'STEM Workshop for Educators',
    description: 'Training workshop for teachers on integrating STEM education in their curriculum',
    date: '2024-02-20',
    time: '09:00 AM',
    location: 'KEEA Education Office',
    registrationUrl: 'https://forms.google.com/stem-educator-workshop',
    image: 'https://images.pexels.com/photos/8197455/pexels-photo-8197455.jpeg',
    type: 'upcoming'
  },
  {
    id: '2',
    title: 'Science Fair Competition',
    description: 'Annual science fair where students showcase their innovative projects',
    date: '2024-03-10',
    time: '10:00 AM',
    location: 'KEEA Community Center',
    registrationUrl: 'https://forms.google.com/science-fair-2024',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    type: 'upcoming'
  }
];

const initialTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Kwame Asante',
    position: 'Executive Director',
    bio: 'PhD in Computer Science with 15 years of experience in STEM education and community development.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    email: 'kwame@stemkeea.org'
  },
  {
    id: '2',
    name: 'Sarah Mensah',
    position: 'Program Coordinator',
    bio: 'Masters in Educational Technology, passionate about bringing innovative learning methods to rural communities.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    email: 'sarah@stemkeea.org'
  },
  {
    id: '3',
    name: 'Michael Osei',
    position: 'Technical Lead',
    bio: 'Software engineer and robotics enthusiast, dedicated to making technology accessible to all students.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    email: 'michael@stemkeea.org'
  }
];

const initialGallery: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/8197455/pexels-photo-8197455.jpeg',
    title: 'Students building robots',
    program: 'Robotics Bootcamp',
    date: '2024-01-15'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    title: 'Coding session',
    program: 'Coding for Kids',
    date: '2024-02-01'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    title: 'Tech Fair presentation',
    program: 'Tech Fair 2024',
    date: '2024-03-15'
  }
];

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [news, setNews] = useState<NewsPost[]>(initialNews);
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [team] = useState<TeamMember[]>(initialTeam);
  const [gallery] = useState<GalleryImage[]>(initialGallery);

  const addNews = (post: Omit<NewsPost, 'id'>) => {
    setNews(prev => [{ ...post, id: generateId() }, ...prev]);
  };

  const updateNews = (id: string, post: Partial<NewsPost>) => {
    setNews(prev => prev.map(item => item.id === id ? { ...item, ...post } : item));
  };

  const deleteNews = (id: string) => {
    setNews(prev => prev.filter(item => item.id !== id));
  };

  const addProgram = (program: Omit<Program, 'id'>) => {
    setPrograms(prev => [{ ...program, id: generateId() }, ...prev]);
  };

  const updateProgram = (id: string, program: Partial<Program>) => {
    setPrograms(prev => prev.map(item => item.id === id ? { ...item, ...program } : item));
  };

  const deleteProgram = (id: string) => {
    setPrograms(prev => prev.filter(item => item.id !== id));
  };

  const addEvent = (event: Omit<Event, 'id'>) => {
    setEvents(prev => [{ ...event, id: generateId() }, ...prev]);
  };

  const updateEvent = (id: string, event: Partial<Event>) => {
    setEvents(prev => prev.map(item => item.id === id ? { ...item, ...event } : item));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(item => item.id !== id));
  };

  const value = {
    news,
    programs,
    events,
    team,
    gallery,
    addNews,
    updateNews,
    deleteNews,
    addProgram,
    updateProgram,
    deleteProgram,
    addEvent,
    updateEvent,
    deleteEvent
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};