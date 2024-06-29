import React, { useEffect } from "react";
import Navigation from "./views/Navigation/Navigation";
import "./App.css";
import Banner from "./views/Banner/Banner";
import Sections from "./views/section/Sections";
import Blog from "./views/Blog/Blog";
import Footer from "./views/Footer/Footer";
import "./views/Responsive/Tablet.css";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <Navigation />
      <Banner />
      <Sections />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
