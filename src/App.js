import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import SeedCollection from "./pages/our-work/SeedCollection";
import ButterflyGarden from "./pages/our-work/ButterflyGarden";
import PreparingPlant from "./pages/our-work/PreparingPlant";
import Paudhashala from "./pages/our-work/Paudhashala";
import Aboutteam from "./pages/Aboutteam";
import TreeCultivations from "./pages/TreeCultivations";
import NameSchool from "./pages/events/NameSchool";
import News from "./media/News";
import Videos from "./media/Videos";
import Volunteer from "./join/Volunteer";
import NewMember from "./join/NewMember";
import Online from "./donate/Online";
import ItemsPay from "./donate/ItemsPay";
import Contactus from "./contact/Contactus";
import Gallery from "./components/Gallery";
import TermsandConditions from "./components/TermsandConditions";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/Vandevrai" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about#team" element={<Aboutteam/>} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-work/seed-collection" element={<SeedCollection />} />
          <Route path="/our-work/butterfly-garden" element={<ButterflyGarden />} />
          <Route path="/our-work/preparing-the-plant" element={<PreparingPlant />} />
          <Route path="/our-work/paudhashala" element={<Paudhashala />} />
          <Route path="/tree-cultivations" element={<TreeCultivations/>} />
          <Route path="/events/name-school-bg" element={<NameSchool/>} />
          <Route path="/media/news" element={<News/>}/>
          <Route path="/media/videos" element={<Videos/>}/>
          <Route path="/join/volunteer" element={<Volunteer/>}/>
          <Route path="/join/new-member" element={<NewMember/>}/>
          <Route path="/donate/online" element={<Online/>}/>
          <Route path="/donate/items" element={<ItemsPay/>}/>
          <Route path="/contact-us" element={<Contactus/>}/>
          <Route path="/gllery" element={<Gallery/>}/>          
          <Route path="/term-conditions" element={<TermsandConditions/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
