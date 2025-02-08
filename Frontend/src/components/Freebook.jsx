import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards2";
function Freebook() {
  const [book, setBook] = useState([
    {
      id: 1,
      title: "HTML & CSS Tutorial",
      description: "Learn the basics of React and build modern web apps.",
      image: "/hc.jpg",
    },
    {
      id: 2,
      title: "C Tutorial",
      description: "Master closures, async/await, and ES6+ features.",
      image: "/node.jpg",
    },
    {
      id: 3,
      title: "C++ Tutorial",
      description: "Learn MERN stack with hands-on projects.",
      image: "/cpp.jpg",
    },
    {
      id: 4,
      title: "JavaScript Tutorial",
      description: "Design stunning and user-friendly interfaces.",
      image: "js.jpg",
    }
  ]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook((prevBooks) => [...prevBooks, ...res.data]); 
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          The fun and learning should must go on. CodingVerse is now launching free courses that are helpful, interactive, fun and most in demand. Now dive into the ocean of fun learning with our free courses exclusively for you!!🥳🎊 The courses that are more fun, more helpful and interactive like never before.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
