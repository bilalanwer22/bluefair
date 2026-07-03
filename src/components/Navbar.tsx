"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bluefair-950/95 backdrop-blur-md border-b border-bluefair-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bluefair-500 text-white font-bold text-lg shadow-lg group-hover:bg-bluefair-400 transition-colors">
            BF
          </div>
          <div>
            <span className="font-display text-xl font-bold text-white tracking-wide">
              Blue Fair
            </span>
            <p className="text-[10px] uppercase tracking-widest text-bluefair-300 -mt-0.5">
              Golf Club
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-bluefair-600 text-white"
                      : "text-bluefair-100 hover:bg-bluefair-800 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-bluefair-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-bluefair-400 transition-colors"
        >
          Book a Tee Time
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-bluefair-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-bluefair-800 bg-bluefair-950 px-4 py-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-bluefair-600 text-white"
                        : "text-bluefair-100 hover:bg-bluefair-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center rounded-full bg-bluefair-500 px-4 py-3 text-sm font-semibold text-white mt-2"
              >
                Book a Tee Time
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
