import React from 'react'
import Container from './Container'
import letestimg from "../assets/letestimg.png"
import letestimg1 from "../assets/letestimg1.png"
import letestimg2 from "../assets/letestimg2.png"
import letestimg3 from "../assets/letestimg3.png"
import letestimg4 from "../assets/letestimg4.png"

const FivethPart = () => {
  return (
    <section className='py-16 bg-[#f0f0f0]'>
      <Container>
        <div className="w-full sm:w-[35%] text-center mx-auto">
          <h2 className="text-[30px] sm:text-[40px] text-[#161616] font-Inter font-bold leading-tight">
            Our Latest News
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[rgba(22,22,22,0.71)] font-Inter font-normal mt-2">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="w-[370px] h-[490px] border-[2px] rounded-xl py-5 px-5 bg-white relative transition-all hover:scale-105 hover:shadow-lg hover:bg-[#f7f7f7] hover:border-[#5956E8]">
            <div className="absolute inset-0 bg-[#5956E8] opacity-0 hover:opacity-40 transition-all duration-300"></div>
            <div className="flex justify-center items-center mb-4">
              <img src={letestimg} alt="Latest Image" className="mx-auto" />
            </div>

            <div className="flex justify-center gap-12 mb-4">
              <img src={letestimg3} alt="Image 1" />
              <img src={letestimg4} alt="Image 2" />
            </div>

            <h2 className="mt-4 text-[22px] text-[#181818] font-Inter font-bold">Business Plans That Fit Your Best Blog</h2>
            <p className="mt-2 text-[16px] text-[#5D5D5D] font-Inter font-normal">There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
            <h4 className="mt-4 cursor-pointer text-[#5956E8] text-[16px] font-Inter font-semibold hover:text-[#3d3dff]">
              Learn More
            </h4>
          </div>

          {/* Card 2 */}
          <div className="w-[370px] h-[490px] border-[2px] rounded-xl py-5 px-5 bg-white relative transition-all hover:scale-105 hover:shadow-lg hover:bg-[#f7f7f7] hover:border-[#5956E8]">
            <div className="absolute inset-0 bg-[#5956E8] opacity-0 hover:opacity-40 transition-all duration-300"></div>
            <div className="flex justify-center items-center mb-4">
              <img src={letestimg1} alt="Latest Image 1" className="mx-auto" />
            </div>

            <div className="flex justify-center gap-12 mb-4">
              <img src={letestimg3} alt="Image 1" />
              <img src={letestimg4} alt="Image 2" />
            </div>

            <h2 className="mt-4 text-[22px] text-[#181818] font-Inter font-bold">Business Plans That Fit Your Best Blog</h2>
            <p className="mt-2 text-[16px] text-[#5D5D5D] font-Inter font-normal">There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
            <h4 className="mt-4 cursor-pointer text-[#5956E8] text-[16px] font-Inter font-semibold hover:text-[#3d3dff]">
              Learn More
            </h4>
          </div>

          {/* Card 3 */}
          <div className="w-[370px] h-[490px] border-[2px] rounded-xl py-5 px-5 bg-white relative transition-all hover:scale-105 hover:shadow-lg hover:bg-[#f7f7f7] hover:border-[#5956E8]">
            <div className="absolute inset-0 bg-[#5956E8] opacity-0 hover:opacity-40 transition-all duration-300"></div>
            <div className="flex justify-center items-center mb-4">
              <img src={letestimg2} alt="Latest Image 2" className="mx-auto" />
            </div>

            <div className="flex justify-center gap-12 mb-4">
              <img src={letestimg3} alt="Image 1" />
              <img src={letestimg4} alt="Image 2" />
            </div>

            <h2 className="mt-4 text-[22px] text-[#181818] font-Inter font-bold">Business Plans That Fit Your Best Blog</h2>
            <p className="mt-2 text-[16px] text-[#5D5D5D] font-Inter font-normal">There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
            <h4 className="mt-4 cursor-pointer text-[#5956E8] text-[16px] font-Inter font-semibold hover:text-[#3d3dff]">
              Learn More
            </h4>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FivethPart;
