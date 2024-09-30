import category2 from "../assets/category-2.png";
import category3 from "../assets/category-3.png";
import category4 from "../assets/category-4.png";
import category5 from "../assets/category-5.png";
import category6 from "../assets/category-6.png";
import emp1 from "../assets/emp1.png";
import emp2 from "../assets/emp2.png";
import emp3 from "../assets/emp3.png";
import emp4 from "../assets/emp4.png";
import emp5 from "../assets/emp5.png";

const constants = {
  sidebarLinks: [
    {
      title: "Owerview",
      href: "/owerview",
      icon: category2,
    },
    {
      title: "Task",
      href: "/task",
      icon: category3,
    },
    {
      title: "Mentors",
      href: "/mentors",
      icon: category4,
    },
    {
      title: "Messages",
      href: "/messages",
      icon: category5,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: category6,
    },
  ],

  taskEmploees: [
    {
      name: "Alice Smith",
      position: "Frontend Developer",
      img: emp1,
    },
    {
      name: "Bob Johnson",
      position: "Backend Developer",
      img: emp2,
    },
    {
      name: "Charlie Brown",
      position: "UI/UX Designer",
      img: emp3,
    },
    {
      name: "Diana Williams",
      position: "Project Manager",
      img: emp4,
    },
  ],
  taskDetails: [
    {
      detail: "Understanding the tools in Figma",
    },
    {
      detail: "Understand the basics of making designs",
    },
    {
      detail: "Design a mobile application with figma",
    },
  ],


  monthlyMentors: [
    {
      name: "Alice Johnson",
      position: "Frontend Developer",
      taskSize: 50,
      reviews: 1200,
      img: emp1, 
      rating: 4.8,
    },
    {
      name: "Mark Twain",
      position: "Backend Developer",
      taskSize: 35,
      reviews: 950,
      img: emp2,
      rating: 4.7,
    },
    {
      name: "Marie Curie",
      position: "Data Scientist",
      taskSize: 45,
      reviews: 860,
      img: emp3, 
      rating: 4.6,
    },
    {
      name: "Steve Jobs",
      position: "Product Designer",
      taskSize: 60,
      reviews: 1500,
      img: emp4,
      rating: 4.9,
    },
  ]
  
    
  
};

export default constants;
