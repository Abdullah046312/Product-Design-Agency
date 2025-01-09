import React from 'react';
import Container from './Container';
import logo from "../assets/logo.png"
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="pt-16 bg-[rgba(89,86,232,0.14)]">
      <Container>
        <div className="flex flex-wrap justify-between items-start gap-12 border-b-[2px] border-[#262626] pb-5">
          {/* Logo and Social Icons */}
          <div className="w-full sm:w-[20%]">
            <img src={logo} alt="Logo" className="w-[150px]" />
            <p className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-2'>
              There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.
            </p>
            <div className="mt-3 flex gap-5">
              <p className="text-[#6C7D93] text-[24px] cursor-pointer">
                <RiFacebookCircleLine className="hover:text-[#3b5998] transition duration-300" />
              </p>
              <p className="text-[#6C7D93] text-[24px] cursor-pointer">
                <FaInstagram className="hover:text-[#E4405F] transition duration-300" />
              </p>
              <p className="text-[#6C7D93] text-[24px] cursor-pointer">
                <FaLinkedin className="hover:text-[#0e76a8] transition duration-300" />
              </p>
              <p className="text-[#6C7D93] text-[24px] cursor-pointer">
                <FaGithub className="hover:text-[#333] transition duration-300" />
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-[50%] md:w-[16%]">
            <h2 className='text-[20px] text-[#161616] font-Inter font-semibold'>Company</h2>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>About Us</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Work</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Latest News</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Careers</h4>
          </div>

          {/* Product Links */}
          <div className="w-full sm:w-[50%] md:w-[16%]">
            <h2 className='text-[20px] text-[#161616] font-Inter font-semibold'>Product</h2>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Prototype</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Plans & Pricing</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Customers</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Integrations</h4>
          </div>

          {/* Support Links */}
        
          <div className="w-full sm:w-[50%] md:w-[16%]">
            <h2 className='text-[20px] text-[#161616] font-Inter font-semibold'>Support</h2>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Help Desk</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Sales</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Become a Partner</h4>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal mt-1'>Developers</h4>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-[50%] md:w-[16%]">
            <h2 className='text-[20px] text-[#161616] font-Inter font-semibold'>Contact</h2>
            <h4 className='text-[16px] text-[#5D5D5D] font-Inter font-normal'>
              524 Broadway , NYC 
              +1 777 - 978 - 5570
            </h4>
          </div>
        </div>

        {/* Footer Attribution */}
        <h2 className='text-[18px] text-[rgba(93,93,93,0.48)] font-Inter font-bold text-center py-2'>
          Design By Abdullah Al-Mamun
        </h2>
      </Container>
    </section>
  );
};

export default Footer;
