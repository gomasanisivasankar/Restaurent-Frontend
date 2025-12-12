import React from "react";
import Navbar from "../Navbar/Navbar";
import SlideShow from "../SlideShow/SlideShow";
import Footer from "../Footer/Footer";
import MenuPage from "../MenuPage/MenuPage";
import Testimonial from "../Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        <Navbar />
        <div className="grow">
          <SlideShow />
        </div>
        <Testimonial/>
        <Footer />
      </div>
    </>
  );
};

export default App;
