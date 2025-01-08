import React from 'react';
import Container from './Container';
import ourserviceimg from "../assets/ourserviceimg.png"
import ourserviceimg1 from "../assets/ourserviceimg1.png"
import ourserviceimg2 from "../assets/ourserviceimg2.png"
import ourserviceimg3 from "../assets/ourserviceimg3.png"
import ourserviceimg4 from "../assets/ourserviceimg4.png"
import ourserviceimg5 from "../assets/ourserviceimg5.png"

const FirstPart = () => {
  return (
    <section className='py-16'>
      <Container>
        <div className="w-full sm:w-[35%] text-center mx-auto">
          <h2 className='text-[30px] sm:text-[40px] text-[#161616] font-Inter font-bold leading-tight'>
            Our Services
          </h2>
          <p className='text-[14px] sm:text-[16px] text-[rgba(22,22,22,0.71)] font-Inter font-normal mt-2'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>


        <div className="mt-20">
          <div className="w-full flex flex-wrap justify-center gap-10">
            {/* Service Card 1 */}
            <div className="w-full sm:w-[370px] h-[300px] border-[1px] px-6 py-10 rounded-md group relative overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img className='border-[1px] py-1 px-1 border-[#5956E8] rounded-lg ' src={ourserviceimg} alt="UI/UX Design" />
              <h2 className='text-[25px] text-[#161616] font-Inter font-semibold mt-5'>UI/UX Design</h2>
              <p className='text-[16px] text-[rgba(22,22,22,0.65)] font-Inter font-normal mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[#5956E8] opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#161616] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Service Card 2 */}
            <div className="w-full sm:w-[370px] h-[300px] border-[1px] px-6 py-10 rounded-md group relative overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img className='border-[1px] py-1 px-1 border-[#5956E8] rounded-lg ' src={ourserviceimg1} alt="Web Development" />
              <h2 className='text-[25px] text-[#161616] font-Inter font-semibold mt-5'>Web Development</h2>
              <p className='text-[16px] text-[rgba(22,22,22,0.65)] font-Inter font-normal mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[#5956E8] opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#161616] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Service Card 3 */}
            <div className="w-full sm:w-[370px] h-[300px] border-[1px] px-6 py-10 rounded-md group relative overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img className='border-[1px] py-1 px-1 border-[#5956E8] rounded-lg ' src={ourserviceimg2} alt="Digital Marketing" />
              <h2 className='text-[25px] text-[#161616] font-Inter font-semibold mt-5'>Digital Marketing</h2>
              <p className='text-[16px] text-[rgba(22,22,22,0.65)] font-Inter font-normal mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[#5956E8] opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#161616] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Service Card 4 */}
            <div className="w-full sm:w-[370px] h-[300px] border-[1px] px-6 py-10 rounded-md group relative overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img className='border-[1px] py-1 px-1 border-[#5956E8] rounded-lg ' src={ourserviceimg3} alt="Graphic Design" />
              <h2 className='text-[25px] text-[#161616] font-Inter font-semibold mt-5'>Graphic Design</h2>
              <p className='text-[16px] text-[rgba(22,22,22,0.65)] font-Inter font-normal mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[#5956E8] opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#161616] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Service Card 5 */}
            <div className="w-full sm:w-[370px] h-[300px] border-[1px] px-6 py-10 rounded-md group relative overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img className='border-[1px] py-1 px-1 border-[#5956E8] rounded-lg ' src={ourserviceimg4} alt="Web Design" />
              <h2 className='text-[25px] text-[#161616] font-Inter font-semibold mt-5'>Web Design</h2>
              <p className='text-[16px] text-[rgba(22,22,22,0.65)] font-Inter font-normal mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[#5956E8] opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#161616] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Service Card 6 */}
            <div className="w-full sm:w-[370px] h-[300px] border-[1px] px-6 py-10 rounded-md group relative overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <img className='border-[1px] py-1 px-1 border-[#5956E8] rounded-lg ' src={ourserviceimg5} alt="Motion Design" />
              <h2 className='text-[25px] text-[#161616] font-Inter font-semibold mt-5'>Motion Design</h2>
              <p className='text-[16px] text-[rgba(22,22,22,0.65)] font-Inter font-normal mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
              <div className="absolute top-0 left-0 w-full h-full bg-[#5956E8] opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#161616] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default FirstPart;
