'use client'
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { MenuIcon, X } from 'lucide-react';
import Navigation from './_components/mobile-menu';

const Header: React.FC = () => {
  // Use state to handle dropdown open/close
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme(); // Get current theme and function to set the theme
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Function to toggle the theme
  const toggleTheme = () => {
    console.log(theme)
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }
  return (
    <header className="cgk3d cs8sl clzfl ">
      <div className="czd2q c92f3 cmhb9 c1plj relative">
        <div className="ctiy6 cxdxt cnc7y cevvc">
          {/* Site branding */}
          <div className="c2npy cbbvf">
            <a className="block" href="index.html" aria-label="Cruip">
              <svg className="csz25 cchtt" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />
              </svg>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="ci5ce cqxxm cfrwd">
            {/* Desktop menu links */}
            <ul className="cxdxt cf4hw cxu0t cnc7y c2h4q">
              <li>
                <a className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1" href="about.html">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1" href="testimonials.html">
                  Testimonials
                </a>
              </li>
              {/* 1st level: hover */}
              <li
                className="czjaw"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <a
                  className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1"
                  href="#0"
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={(e) => e.preventDefault()}
                >
                  Resources
                  <svg className="cx9o7 cn4vl c4u31 c2npy cqc4s c39kt cwc3u" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"></path>
                  </svg>
                </a>
                {/* 2nd level: hover */}
                <ul className="cj3dx cltap cvbap cgk3d cif5c c6zr7 ceg5n cp8ye c3x8w cvvwb ci4w1" style={{ display: open ? 'block' : 'none' }}>
                  <li>
                    <a className="text-gray-600 cti8h cce98 c0atf c8qwg ceng1 cnc7y c1plj ci4w1" href="help.html">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 cti8h cce98 c0atf c8qwg ceng1 cnc7y c1plj ci4w1" href="404.html">
                      404
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Desktop lights switch */}
            <div className="form-switch cw3my c54sb cahr4 cnc7y">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch cft5d"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <label className="czjaw" htmlFor="light-switch-desktop">
                <span
                  className="cww77 c1cr6 clgvu chf91 c8mz9 czjaw chb9f ctlyr"
                  aria-hidden="true"
                ></span>
                <svg className="cgk3d c2ysc" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG content */}
                </svg>
                <span className="cft5d">Switch to light / dark version</span>
              </label>
            </div>

            {/* Desktop CTA on the right */}
            <ul className="cxdxt c138q cxu0t cnc7y">
              <li>
                <a className="text-white bg-teal-500 cvy08 c9xc1 cbev1" href="contact.html">
                  Request code
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="czak8 ce20z">
            {/* Mobile lights switch */}
            <div className="form-switch cw3my c54sb ccond cnc7y">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-mobile"
                className="light-switch cft5d"
                checked={theme === 'dark'}
                onChange={toggleTheme} // Toggle theme on change
              />
              <label className="czjaw" htmlFor="light-switch-mobile">
                <span
                  className="cww77 c1cr6 clgvu chf91 c8mz9 czjaw chb9f ctlyr"
                  aria-hidden="true"
                ></span>
                <svg className="cgk3d c2ysc" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG content */}
                </svg>
                <span className="cft5d">Switch to light / dark version</span>
              </label>
            </div>

            {/* Hamburger button */}
            <button className="ce3b3" aria-controls="mobile-nav" aria-expanded="false" onClick={handleToggleMobileMenu}>
              <span className="cft5d">Menu</span>
              {showMobileMenu?
               <X className='h-8 w-8 dark:text-white text-black'/>
              :
              <MenuIcon className='h-8 w-8 dark:text-white text-black' />}
            </button>
          </div>
        </div>
        <div className={` ${showMobileMenu ? 'block' : 'hidden'} mt-2 w-[80vw] h-screen top-0 z-20 left-0 absolute`}>
        <Navigation isOpen={showMobileMenu} setIsOpen={setShowMobileMenu}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
