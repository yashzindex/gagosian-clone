"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const mainLinks = [
  "Exhibitions",
  "Artists",
  "Fairs & Collecting",
  "Quarterly",
  "News",
  "Locations",
  "Shop",
  "Premieres",
];

const rightLinks = ["Subscribe", "Search"];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleCollapse = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="bg-white sticky top-0 left-0 right-0 z-50">
        <div className="w-full max-w-[1832px] mx-auto px-4">
          <div className="w-full max-w-[1224px] mx-auto">
            <div className="flex max-xl:items-start justify-between xl:gap-10 lg:w-full lg:flex-nowrap px-4 relative">
              <div className="flex flex-col xl:flex-row xl:items-center lg:w-full">
                <div
                  className={`mr-6 overflow-hidden max-lg:text-start relative z-51 transition-[width] duration-300 ease-in-out ${
                    scrolled ? " w-18" : "opacity-0 w-0"
                  } ${menuOpen ? "!opacity-100 !w-18" : ""}`}
                >
                  {/* this is max width get 0 default and when header scrool then width full as link show */}
                  <Link
                    href="/"
                    className="font-minionNormal whitespace-nowrap text-19 text-foreground block h-9 font-bold leading-9"
                  >
                    Gagosian
                  </Link>
                </div>
                <div
                  className={`max-lg:h-full max-lg:w-full max-lg:fixed max-lg:top-0 max-lg:-left-full max-lg:right-0 max-lg:pt-9 max-lg:px-4 max-lg:bg-white lg:relative ${
                    menuOpen ? "!left-0" : ""
                  } transition-all duration-300 ease-in-out`}
                >
                  <ul className="flex max-lg:flex-col lg:items-center max-xl:border-t max-xl:border-[#cccccc]">
                    {/* <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Exhibitions
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Artists
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Fairs & Collecting
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Quarterly
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        News
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Locations
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Premieres
                      </Link>
                    </li> */}
                    {mainLinks.map((link) => (
                      <li key={link} className="lg:mr-6 last:mr-0">
                        <Link
                          href="/"
                          className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Subscribe
                      </Link>
                    </li>
                    <li className="lg:mr-6 last:mr-0">
                      <Link
                        href="/"
                        className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9 max-lg:px-4 max-lg:border-b max-lg:border-[#cccccc]"
                      >
                        Search
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="block lg:hidden relative z-51">
                <button
                  onClick={toggleCollapse}
                  className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground font-bold leading-9 capitalize"
                >
                  {menuOpen ? "close" : "menu"}
                </button>
              </div>

              <ul className="hidden lg:flex items-center max-xl:border-b max-xl:border-[#cccccc]">
                {rightLinks.map((link) => (
                  <li key={link} className="lg:mr-6 last:mr-0">
                    <Link
                      href="/"
                      className="font-minionNormal whitespace-nowrap text-19 text-muted hover:text-foreground block h-9 font-bold leading-9"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
