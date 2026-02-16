"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-400 shadow sticky top-0 z-50 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Blue Skies School Logo"
            width={80}
            height={80}
            priority
            className="rounded"
          />
          
          <span className="font-bold text-lg sm:text-xl">
            Blue Skies School
          </span>
        </Link>



        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menu */}
        <nav
          className={`${menuOpen ? "block" : "hidden"
            } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-blue-700 md:bg-transparent shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-0">
            <li>
              <Link href="/" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* ABOUT DROPDOWN */}
            <li className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 hover:text-blue-200 focus:outline-none transition-colors"
              >
                About
                <span className={`text-[10px] transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {aboutOpen && (
                <ul className="md:absolute bg-white border border-gray-100 shadow-2xl rounded-lg mt-2 w-60 py-2 z-[60]">
                  {/* Yahan text-gray-800 add kiya hai taaki white background par dikhe */}
                  {[
                    { name: "Our School", href: "/about/our-school" },
                    { name: "Vision & Mission", href: "/about/vision-mission" },
                    { name: "Chairman's Message", href: "/about/chairman" }, // New Add
                    { name: "Director's Desk", href: "/about/director" },
                    { name: "Principal’s Message", href: "/about/principal-message" },
                    { name: "Management", href: "/about/management" },
                    { name: "Mandatory Disclosure", href: "/about/mandatory-disclosure" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        onClick={() => {
                          setAboutOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link href="/admission" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>
                Admission
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}