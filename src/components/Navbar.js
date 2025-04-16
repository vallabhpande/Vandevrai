import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Tree logo.jpg";

const navItems = [
  {
    label: "Home",
    href: "/Vandevrai",
  },
  {
    label: "About Us",
    submenu: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/our-team" },
    ],
  },
  {
    label: "Our Work",
    submenu: [
      { label: "Seed Collection", href: "/our-work/seed-collection" },
      { label: "Butterfly Garden", href: "/our-work/butterfly-garden" },
      { label: "Preparing the Plant", href: "/our-work/preparing-the-plant" },
      { label: "पौधशाळा", href: "/our-work/paudhashala" },
    ],
  },
  {
    label: "Tree Cultivations",
    href: "/tree-cultivations",
  },
  {
    label: "Events",
    submenu: [
      { label: "Name School (BG)", href: "/events/name-school-bg" },
    ],
  },
  {
    label: "Media",
    submenu: [
      { label: "News", href: "/media/news" },
      { label: "Videos", href: "/media/videos" },
    ],
  },
  {
    label: "Join Us",
    submenu: [
      { label: "Volunteer", href: "/join/volunteer" },
      { label: "New Member", href: "/join/new-member" },
    ],
  },
  {
    label: "Donate",
    submenu: [
      { label: "Pay Online (PhonePe/Google Pay)", href: "/donate/online" },
      { label: "Donate Items (Seed, Plant, Water, Bag)", href: "/donate/items" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    if (openDropdown === label) {
      setOpenDropdown(null); // Close submenu if it's already open
    } else {
      setOpenDropdown(label); // Open the submenu
    }
  };

  const closeMobileMenu = () => {
    setMobileOpen(false); // Close the mobile menu when clicking a non-dropdown item
  };

  return (
    <nav className="sticky top-0 z-50 bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/Vandevrai" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-white shadow"
          />
          <span className="text-xl font-bold text-white">Nature Club</span>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item.label} className="relative group cursor-pointer">
              {item.href ? (
                <Link to={item.href} className="hover:text-yellow-300" onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              ) : (
                <div className="hover:text-yellow-300" onClick={() => toggleDropdown(item.label)}>
                  {item.label}
                </div>
              )}
              {item.submenu && (
                <ul
                  className={`absolute top-10 left-0 bg-white text-black rounded-md shadow-lg px-4 py-2 space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-10 ${
                    openDropdown === item.label ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        to={sub.href}
                        className="hover:text-green-700 block"
                        onClick={closeMobileMenu}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    if (item.submenu) {
                      toggleDropdown(item.label); // Toggle submenu if item has a submenu
                    } else {
                      closeMobileMenu(); // Close mobile menu if no submenu
                    }
                  }}
                >
                  {item.href ? (
                    <Link to={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {item.submenu && (
                    <span>{openDropdown === item.label ? "-" : "+"}</span>
                  )}
                </div>
                {item.submenu && openDropdown === item.label && (
                  <ul className="pl-4 pt-2 space-y-1">
                    {item.submenu.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          to={sub.href}
                          className="text-sm text-gray-200 block hover:text-white"
                          onClick={closeMobileMenu}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
