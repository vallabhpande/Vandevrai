import React from 'react'

// export default function About() {
//   return (
//     <div>About</div>
//   )
// }

import heroImage from "../assets/images/images.jpeg";
import ourStoryImage from "../assets/images/download.jpeg";
import team1 from "../assets/images/download (1).jpeg";
import team2 from "../assets/images/images (2).jpeg";
import team3 from "../assets/images/images.jpeg";

const About = () => {
  const teamImages = [team1, team2, team3];

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black bg-opacity-50 p-6 rounded text-white text-center">
          <h1 className="text-4xl font-bold mb-2">About Devrai</h1>
          <p className="text-lg">Preserving Indigenous Green Heritage</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={ourStoryImage} alt="Our Story" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg">
              Devrai is a grassroots movement dedicated to reviving sacred groves and promoting indigenous tree conservation. 
              Since our humble beginnings, we've partnered with schools, communities, and volunteers to plant and nurture thousands of native trees.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p>To conserve biodiversity through the revival of Devrais and planting indigenous tree species across Maharashtra.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p>Creating a greener future where traditional ecological knowledge meets modern conservation efforts.</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { title: 'Seed Collection', icon: '🌱' },
            { title: 'Butterfly Garden', icon: '🦋' },
            { title: 'Tree Cultivation', icon: '🌳' },
            { title: 'पौधशाळा', icon: '🏡' },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-green-100 px-6 md:px-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '455,000+', label: 'Indigenous Trees Planted' },
            { stat: '13', label: 'Districts Covered' },
            { stat: '40+', label: 'Devrai Developed' },
            { stat: '6+', label: 'Years in Conservation' },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-green-700">{item.stat}</h3>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamImages.map((img, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <img src={img} alt={`Team Member ${i + 1}`} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
              <h4 className="text-xl font-semibold">Member Name</h4>
              <p className="text-sm text-gray-600">Role / Position</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Join Us */}
      <section className="py-16 px-6 md:px-20 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="mb-6">Be a part of the green revolution. Volunteer, Donate, or Become a Member today!</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-green-600 font-semibold py-2 px-6 rounded hover:bg-green-100 transition">Volunteer</button>
          <button className="bg-white text-green-600 font-semibold py-2 px-6 rounded hover:bg-green-100 transition">Donate</button>
          <button className="bg-white text-green-600 font-semibold py-2 px-6 rounded hover:bg-green-100 transition">New Member</button>
        </div>
      </section>
    </div>
  );
};

export default About;
