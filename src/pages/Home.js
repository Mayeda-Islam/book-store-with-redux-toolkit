import React from "react";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/navbar/tags/Tags";

import Pagination from "../components/ui/Pagination";
import Footer from "../components/footer/Footer";
import VideoGrid from "../components/grid/VideoGrid";

const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
