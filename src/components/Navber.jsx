import React, { useState } from 'react';
import Container from './Container';
import logo from '../assets/logo.png';

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <section className="py-6">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="w-[10%]">
            <img className="lg:w-[50%]" src={logo} alt="Logo" />
          </div>

          {/* Menu items */}
          <div className="w-[60%] hidden md:flex justify-center items-center">
            <ul className="flex gap-10 cursor-pointer">
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Home</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">About</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Service</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Blog</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Contact</li>
            </ul>
          </div>

          {/* Contact Us Button */}
          <div className="w-[20%] hidden md:block">
          <button className='group relative h-[48px] w-[144px] bg-[#5956E8] text-[14px] sm:text-[18px] text-[#FFFF] hover:text-[#FFFF] font-Inter font-normal rounded-xl mt-5 overflow-hidden'>
              <span className='relative z-10'>Contact Us</span>

              {/* Before and After Pseudo Elements for Hover Effect */}
              <span className='absolute inset-0 w-full h-full bg-[#402E7A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></span>

              <span className='absolute inset-0 w-full h-full border-2 border-[#5956E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out group-hover:border-2 group-hover:border-[#FFFF]'></span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-[#5956E8] text-[50px]">
              {isMenuOpen ? '×' : '≡'} {/* Toggle between X and hamburger icon */}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4 items-center cursor-pointer">
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Home</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">About</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Service</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Blog</li>
              <li className="text-[18px] text-[#181818] font-Inter font-medium hover:text-[#5956E8]">Contact</li>
            </ul>
            <button className="w-full mt-4 h-[48px] bg-[#5956E8] text-[18px] text-white font-Inter font-normal rounded-xl">
              Contact Us
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Navber;
