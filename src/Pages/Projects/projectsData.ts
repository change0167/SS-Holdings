export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  status: "completed" | "ongoing";
};

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Real Estate Website",
    description: "Modern real estate platform built using React.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    status: "completed",
  },
   {
    id: 2,
    title: "Real Estate Website",
    description: "Modern real estate platform built using React.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Single-page portfolio with smooth scrolling.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    status: "completed",
  },
  {
    id: 4,
    title: "Property Listing App",
    description: "Dynamic listings with filters and search.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    status: "ongoing",
  },
    {  id: 5,
    title: "Portfolio Website",
    description: "Single-page portfolio with smooth scrolling.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    status: "completed",
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description: "Dashboard to manage properties and leads.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    status: "ongoing",
  },
  
];
