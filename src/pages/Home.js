import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Tree logo.jpg"; 
import OurDevraiSlider from "./OurDevraiSlider";
import StatsCounter from "./StatsCounter";
import PhotoGallery from "./PhotoGallery";
import SlidingImageCardGrid from "./SlidingImageCardGrid";
const Home = () => {
  return (
    <>
     <OurDevraiSlider />
     <SlidingImageCardGrid />
      <StatsCounter />
      <PhotoGallery />
    </>
  );
};

export default Home;
