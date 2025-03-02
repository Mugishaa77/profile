import AtlasHome from '../media/atlas_home.png';
import EvergreenHome from '../media/evergreen_home.png';
import jawabuOne from '../media/jawabu_one.png';
import DarasaniOne from '../media/darasani_one.png';
import datadrive from '../media/dataarive.png';

const projects = [
    {
        id: 1,
        name: "Datadrive",
        description: "A logistics optimization platform utilizing real-time data for efficient fleet and delivery management.",
        features: ["Real-Time Route Optimization", "Fleet Management", "Delivery Management"],
        techStack: ["React.js", "Typescript", "Vite", "Tailwind CSS" , "Axios","SCSS"],
        image: datadrive,
        liveLink: "https://datadrive.africa/",
        codeLink: "https://github.com/DataDrive-africa"
      },
      {
        id: 2,
        name: "Jawabu Events",
        description: "An events booking website providing seamless service reservations and location-based listings.",
        features: ["Event Booking System", "Service Listings", "Contact Page"],
        techStack: ["React.js", "HTML", "CSS", "Bootstrap"],
        image: jawabuOne,
        liveLink: "https://jawabu-kappa.vercel.app/",
        codeLink: "https://github.com/Mugishaa77/jawabu"
      },
      {
        id: 3,
        name: "Darasani Hub",
        description: "A tutoring platform connecting students with qualified tutors for personalized learning experiences.",
        features: ["Find a Tutor", "Become a Tutor", "User Authentication"],
        techStack: ["React.js", "Bootstrap.css", "Tailwind.css","HTML", "CSS", "Bootstrap", "Tailwind CSS"],
        image: DarasaniOne,
        liveLink: "https://sal-darasani.vercel.app/",
        codeLink: "https://github.com/Darasani-Hub"
      }, 
    {
      id: 4,
      name: "Atlas Tea Brokers Ltd",
      description: "A digital platform enhancing tea auction visibility and market insights for brokers and buyers.",
      features: ["Auction Details", "Market Reports", "Responsive Design"],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: AtlasHome,
      liveLink: "https://atlas-omega.vercel.app/",
      codeLink: "https://github.com/Mugishaa77/atlas"
    },
    {
      id: 5,
      name: "Evergreen Shopping Basket",
      description: "An online shopping platform for fresh market produce with an integrated shopping cart system.",
      features: ["Product Listings", "Shopping Basket", "Checkout System"],
      techStack: ["React.js", "HTML", "CSS", "Bootstrap", "MongoDB, Express.js, Jwt, Node.js"],
      image: EvergreenHome,
      liveLink: "https://new-evergreen.vercel.app/",
      codeLink: "https://github.com/Mugishaa77/new-evergreen"
    },
    
    
  ];
  
  export { projects };