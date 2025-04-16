import React, { useState, useEffect } from "react";
import team1 from "../assets/images/team1.jpeg";
import team2 from "../assets/images/team2.jpeg";
import team3 from "../assets/images/team3.jpeg";
import team4 from "../assets/images/team4.jpeg";
import team5 from "../assets/images/team5.jpeg";
import team6 from "../assets/images/team6.jpeg";
import team7 from "../assets/images/team7.jpeg";
import team8 from "../assets/images/team8.jpeg";
import team9 from "../assets/images/team9.jpeg";
import team10 from "../assets/images/team10.jpeg";
import teamBg from "../assets/images/team-bg.jpeg";

const teamMembers = [
  { name: "Lokesh Patil", role: "Founder & Environmental Activist", image: team1, memberinfo: "XYZ" },
  { name: "Ravi Shinde", role: "Project Coordinator", image: team2, memberinfo: "XYZ" },
  { name: "Sneha Jadhav", role: "Field Officer", image: team3, memberinfo: "XYZ" },
  { name: "Meenal Kulkarni", role: "Communication Head", image: team4, memberinfo: "XYZ" },
  { name: "Vikas Mane", role: "Tree Conservationist", image: team5, memberinfo: "XYZ" },
  { name: "Pooja Deshmukh", role: "Volunteer Manager", image: team6, memberinfo: "XYZ" },
  { name: "Ajay Pawar", role: "Operations Lead", image: team7, memberinfo: "XYZ" },
  { name: "Sheetal Karande", role: "CSR Coordinator", image: team8, memberinfo: "XYZ" },
  { name: "Kunal Bhosale", role: "Data Analyst", image: team9, memberinfo: "XYZ" },
  { name: "Anuja More", role: "Field Volunteer", image: team10, memberinfo: "XYZ" },
];

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's `lg` breakpoint
    };
    updateView(); // Call on mount
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  const getVisibleMembers = () => {
    let visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + teamMembers.length) % teamMembers.length;
      visible.push({
        ...teamMembers[index],
        position: i,
      });
    }
    return visible;
  };

  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <section
        className="text-white text-center w-full h-96 py-20 bg-cover bg-center bg-no-repeat relative 
        sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem]"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h1>
          <p className="text-lg sm:text-xl md:text-2xl">The passionate people behind Sahyadri Devrai</p>
        </div>
      </section>

      {/* Team Cards */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        {isMobile ? (
          // Mobile View: Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 max-w-full rounded-full mx-auto mb-4 object-cover border-4 border-green-400 shadow-md"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-xs text-gray-500">{member.memberinfo}</p>
              </div>
            ))}
          </div>
        ) : (
          // Desktop View: Animated Slider
          <div className="flex justify-center items-center gap-6 overflow-hidden">
            {getVisibleMembers().map((member, index) => {
              let blurClass = "";
              if (Math.abs(member.position) === 2) blurClass = "blur-sm opacity-40 scale-90";
              else if (Math.abs(member.position) === 1) blurClass = "blur-[2px] opacity-60 scale-95";
              else blurClass = "opacity-100 scale-100 z-10";

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out transform ${blurClass}`}
                >
                  <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 w-72 text-center hover:shadow-xl transform hover:scale-105 transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 max-w-full rounded-full mx-auto mb-4 object-cover border-4 border-gradient-to-r from-blue-400 via-pink-500 to-purple-600 shadow-xl"
                    />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    <p className="text-xs text-gray-500">{member.memberinfo}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeam;