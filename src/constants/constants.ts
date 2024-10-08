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
import task1 from "../assets/task1.png";
import task2 from "../assets/task2.png";

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
  ],
  upcomingTasks: [
    {
      name: "Creating Mobile App Design",
      team: "UI/UX Design",
      date: "3 Days Left",
      img: task1,
      progress: 75,
      taskEmployes: [
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
    },
    {
      name: "Creating Perfect Website",
      team: "Web Developer",
      date: "4 Days Left",
      img: task2,
      progress: 85, 
      taskEmployes: [
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
    },
    {
      name: "Creating Mobile App Design",
      team: "UI/UX Design",
      date: "3 Days Left",
      img: task1,
      progress: 75,
      taskEmployes: [
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
    },
    {
      name: "Creating Perfect Website",
      team: "Web Developer",
      date: "4 Days Left",
      img: task2,
      progress: 85, 
      taskEmployes: [
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
    },
    {
      name: "Creating Mobile App Design",
      team: "UI/UX Design",
      date: "3 Days Left",
      img: task1,
      progress: 75,
      taskEmployes: [
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
    },
  ],
  mentors: [
    {
      name: "Alice Johnson",
      position: "Frontend Developer",
      taskSize: 50,
      reviews: 1200,
      img: emp1,
      rating: 4.8,
      text: "Hi, I'm Alice Johnson. I am a skilled frontend developer with over 5 years of experience in creating responsive and user-friendly web applications. I'm passionate about clean code and cutting-edge web technologies."
    },
    {
      name: "Mark Twain",
      position: "Backend Developer",
      taskSize: 35,
      reviews: 950,
      img: emp2,
      rating: 4.7,
      text: "Hello, I'm Mark Twain. I specialize in backend development, building scalable and secure server-side architectures. With 7 years of experience, I focus on efficiency and optimizing performance."
    },
    {
      name: "Marie Curie",
      position: "Data Scientist",
      taskSize: 45,
      reviews: 860,
      img: emp3,
      rating: 4.6,
      text: "Hi, I'm Marie Curie, a data scientist with a deep passion for uncovering hidden insights from complex datasets. With a background in statistical analysis and machine learning, I have helped businesses make data-driven decisions."
    },
    {
      name: "Steve Jobs",
      position: "Product Designer",
      taskSize: 60,
      reviews: 1500,
      img: emp4,
      rating: 4.9,
      text: "Hi, I'm Steve Jobs, a creative product designer with a knack for creating intuitive and innovative user experiences. With over 10 years of experience, I strive to design products that delight and inspire users."
    },
  ]
  
  
};

export default constants;
