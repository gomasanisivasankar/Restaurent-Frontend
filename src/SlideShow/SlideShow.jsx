import React from "react";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext"; 
import "react-slideshow-image/dist/styles.css";


const slideImages = [
  { url: "/assets/slide1.jpg", caption: "Authentic Biryani Delights" },
  { url: "/assets/slide2.jpg", caption: "Spice Meets Perfection" },
  { url: "/assets/slide3.jpg", caption: "The Taste of Tradition" },
];

const SlideShow = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleOrderNow = () => {
    if (!user) navigate("/signup");
    else navigate("/menu");
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 flex flex-col md:flex-row items-center justify-center text-white overflow-hidden">
      <div className="w-full md:w-1/2 p-3 md:p-6">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <Slide
            duration={4000}
            transitionDuration={1000}
            easing="ease"
            autoplay={true}
            infinite={true}
            pauseOnHover={false}
          >
            {slideImages.map((slideImage, index) => (
              <div key={index} className="relative w-full h-[450px] md:h-[550px]">
                <img
                  src={slideImage.url}
                  alt={slideImage.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-linear-to-t from-black/90 via-black/60 to-transparent py-6 flex justify-center">
                  <span className="text-white text-2xl md:text-3xl font-semibold tracking-wide drop-shadow-lg">
                    {slideImage.caption}
                  </span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 md:px-12 py-10 md:py-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
          Welcome to SS Restaurant 🍛
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md leading-relaxed">
          Experience the future of dining — order your favorite dishes directly
          from your table. Fast, fresh, and flavorful every time!
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate("/menu")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Explore Menu
          </button>
          <button
            onClick={handleOrderNow}
            className="bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
