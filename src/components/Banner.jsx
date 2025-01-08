import React from 'react';
import Container from './Container';
import bannerimg from "../assets/bannerimg.png";

const Banner = () => {
  return (
    <section className='bg-[#5956E8] py-16'>
      <Container>
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-36">
          {/* Text Section */}
          <div className="w-full sm:w-[35%]">
            <h2 className='text-[35px] sm:text-[65px] text-[#FFFF] font-Inter font-bold leading-tight'>
              We Are Digital Product Design Agency
            </h2>
            <p className='text-[14px] sm:text-[16px] text-[#FFFF] font-Inter font-normal mt-3'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <button className='group relative h-[48px] w-[144px] bg-[#FFFF] text-[14px] sm:text-[18px] text-[#5956E8] hover:text-[#FFFF] font-Inter font-normal rounded-xl mt-5 overflow-hidden'>
              <span className='relative z-10'>Contact Us</span>

              {/* Before and After Pseudo Elements for Hover Effect */}
              <span className='absolute inset-0 w-full h-full bg-[#5956E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></span>

              <span className='absolute inset-0 w-full h-full border-2 border-[#5956E8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out group-hover:border-2 group-hover:border-[#FFFF]'></span>
            </button>

          </div>

          {/* Image Section */}
          <div className="w-full sm:w-[35%]">
            <img src={bannerimg} alt="Banner Image" className="w-full h-auto object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
