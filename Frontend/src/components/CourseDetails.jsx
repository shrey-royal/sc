import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <h2 className="text-center mt-10">Course Not Found</h2>;

  return (
    <>
    <Navbar className="mb-6" />  
    <div className="max-w-screen-lg mx-auto px-4 pt-16 mt-6 pb-10">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <img src={course.image} alt={course.title} className="w-full h-60 object-cover rounded-lg mt-4" />
      <p className="mt-4 text-lg">{course.description}</p>
      <p className="mt-2 text-xl font-bold">{course.price}</p>
      <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded-md">Proceed to Payment</button>
      </div>
      <Footer/>
    </>
  );
};

export default CourseDetails;
