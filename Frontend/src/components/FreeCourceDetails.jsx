import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FreeCourseDetails = ({ fcourses }) => {
  const { id } = useParams();
  const fcourse = fcourses.find((c) => c.id === parseInt(id));

  if (!fcourse) return <h2 className="text-center mt-10">Course Not Found</h2>;

  return (
    <>
    <Navbar className="mb-6" />  
    <div className="max-w-screen-lg mx-auto px-4 pt-16 mt-6 pb-10">
      <h1 className="text-3xl font-bold">{fcourse.title}</h1>
      <img src={fcourse.image} alt={fcourse.title} className="w-full h-60 object-cover rounded-lg mt-4" />
      <p className="mt-4 text-lg">{fcourse.description}</p>
      <p className="mt-2 text-xl font-bold">{fcourse.price}</p>
      <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded-md">Get Started</button>
      </div>
      <Footer/>
    </>
  );
};

export default FreeCourseDetails;
