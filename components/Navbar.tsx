"use client";
import { NAV_LINKS } from "../constants/index";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Images/Beyondborders3.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="absolute top-0 left-0 z-30 w-full">
      <div className="w-full flexBetween max-container padding-container z-30 py-2 lg:py-5">
        <Link href="/">
          <Image
            className="lg:w-[120px] h-auto w-[60px]"
            src={logo.src}
            alt="logo"
            width="150"
            height="143"
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.key}
              onClick={(e) => scrollToSection(e, link.href)}
              className="regular-16 text-black flexCenter cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="#contact"
            className="regular-16 bg-black text-beige px-6 py-2 rounded-full flexCenter cursor-pointer transition-all hover:bg-turquoise hover:text-beige"
          >
            Get a Quote
          </Link>
        </ul>

        {/* Hamburger menu */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <i className={`bx bx-menu text-2xl transition-all duration-300 ${open ? "bx-x" : ""}`}></i>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={`absolute top-20 left-0 flex flex-col gap-5 p-3 w-full bg-white lg:hidden ${open ? "flex" : "hidden"}`}
      >
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            onClick={(e) => scrollToSection(e, link.href)}
            className="regular-16 text-black flexCenter cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
