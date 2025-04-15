// // src/components/Footer.js
// import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../assets/Tree logo.jpg";

// const Footer = () => {
//   return (
//     <footer className="bg-green-900 text-white py-10 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Logo + About */}
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <img src={logo} alt="Logo" className="h-12 w-12 rounded-full border-2 border-white" />
//             <h2 className="text-xl font-bold">Nature Club</h2>
//           </div>
//           <p className="text-sm text-gray-300">
//             Working towards a greener future with community-driven initiatives like tree cultivation, seed collection, and environmental education.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li><Link to="/" className="hover:text-white">Home</Link></li>
//             <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//             <li><Link to="/gllery" className="hover:text-white">Gallery</Link></li>
//             <li><Link to="/events" className="hover:text-white">Terms & Conditions</Link></li>
//             <li><Link to="/join" className="hover:text-white">Join Us</Link></li>
//             <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact</h3>
//           <ul className="space-y-3 text-sm text-gray-300">
//             <li className="flex items-center gap-2"><FaPhoneAlt /> +91 12345 67890</li>
//             <li className="flex items-center gap-2"><FaEnvelope /> info@natureclub.org</li>
//             <li className="flex items-center gap-2"><FaMapMarkerAlt /> Pune, Maharashtra, India</li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//           <div className="flex gap-4 text-white text-xl">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaFacebookF /></a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
//             <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300"><FaTwitter /></a>
//           </div>
//         </div>
//       </div>

//       <div className="text-center text-sm text-gray-400 mt-10">
//         © {new Date().getFullYear()} Nature Club. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Tree logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-12 w-12 rounded-full border-2 border-white" />
            <h2 className="text-xl font-bold">Nature Club</h2>
          </div>
          <p className="text-sm text-gray-300">
            Working towards a greener future with community-driven initiatives like tree cultivation, seed collection, and environmental education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gllery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/term-conditions" className="hover:text-white">Terms & Conditions</Link></li>            <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 12345 67890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@natureclub.org</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Pune, Maharashtra, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white text-2xl">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} Nature Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
