"use client";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-4 sm:px-10 py-3 bg-white z-20 relative">
      <div className="flex items-center gap-4 text-[#101518]">
        <div className="size-4">
          {/* Logo SVG */}
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">Abdullah Nasir</h2>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-[#101518] text-sm font-medium leading-normal hover:text-blue-600 transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] ml-8">
          <span className="truncate">Resume</span>
        </button>
      </nav>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="p-2 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              stroke="#101518"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start px-4 py-4 gap-4 md:hidden animate-fade-in z-30">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-[#101518] text-base font-medium leading-normal w-full py-2 hover:text-blue-600 transition-colors"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dce8f3] text-[#101518] text-base font-bold leading-normal tracking-[0.015em] mt-2">
            <span className="truncate">Resume</span>
          </button>
        </div>
      )}
    </header>
  );
} 