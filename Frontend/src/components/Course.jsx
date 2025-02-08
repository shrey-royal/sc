import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([
    {
      id: 1,
      title: "React JS",
      description: "Learn the basics of React and build modern web apps.",
      price: "₹2999",
      image: "/react.jpg",
    },
    {
      id: 2,
      title: "Node JS",
      description: "Master closures, async/await, and ES6+ features.",
      price: "₹2999",
      image: "/node.jpg",
    },
    {
      id: 3,
      title: "Mastering MongoDB",
      description: "Learn MERN stack with hands-on projects.",
      price: "₹1999",
      image: "/mongo.jpg",
    },
    {
      id: 4,
      title: "Expert UI/UX Design",
      description: "Design stunning and user-friendly interfaces.",
      price: "₹9999",
      image: "uiux.jpg",
    },
    {
      id: 5,
      title: "Python Zero to Hero",
      description: "Analyze data and build ML models using Python.",
      price: "₹1999",
      image: "python.jpg",
    },
    {
      id: 6,
      title: "Java Developer",
      description: "Complete learning Java and SpringBoot for Full Stack Development",
      price: "₹7999",
      image: "java.jpg",
    },
    {
      id: 7,
      title: "Cloud Computing / AWS",
      description: "Become a successful Server master",
      price: "₹4999",
      image: "aws.jpg",
    },
    {
      id: 8,
      title: "Ethical Hacking",
      description: "Help the government tackle black hat hackers",
      price: "₹7999",
      image: "hacking.jpg",
    },
    {
      id: 9,
      title: "Oracle SQL",
      description: "Master database management",
      price: "₹3999",
      image: "oracle.jpg",
    },
    {
      id: 10,
      title: "DSA",
      description: "Master data structures and algorithms",
      price: "₹1999",
      image: "dsa.jpg",
    },
    {
      id: 11,
      title: "Spring Boot Fundamentals",
      description: "Learn C and C++ programming",
      price: "₹3999",
      image: "spring.jpg",
    },
    {
      id: 12,
      title: "Flutter Development",
      description: "Learn Flutter for cross-platform apps",
      price: "₹4999",
      image: "flutter.jpg",
    },
  ]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook((prevBooks) => [...prevBooks, ...res.data]); // Merge API data
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 ">
      <h2 className="text-3xl font-semibold text-center pt-24 mb-10">Explore Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
