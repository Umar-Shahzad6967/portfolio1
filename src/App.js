import React, { useEffect, useState } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import Experiences from "./components/experiences/Experiences";


const App = () => {

  return (
    <>
      <ScrollToTop />

      <AllRoutes />
    </>
  );
};

export default App;
