import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "@fontsource/ubuntu";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import loadingpage from "./assets/loading.gif";

// Loading komponenti - yuklash ekranini ko'rsatish uchun
const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='text-2xl'>
        <img
          className='w-14 md:w-20 h-14 md:h-20 mx-auto'
          src={loadingpage}
          alt="loading"
        />
        <h3 className="font-bold text-gray-700 text-xl md:text-4xl mt-3">
          Loading...
        </h3>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 soniyadan keyin yuklash ekranini olib tashlash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
