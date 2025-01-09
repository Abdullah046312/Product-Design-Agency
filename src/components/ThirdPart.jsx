import React from 'react';
import Container from './Container';
import teammember1 from "../assets/teammember1.png";
import teammember2 from "../assets/teammember2.png";
import teammember3 from "../assets/teammember3.png";

const ThirdPart = () => {
  const teamMembers = [
    { image: teammember1, name: "Mahid Ahmed", designation: "UX Designer" },
    { image: teammember2, name: "Kazi Afia", designation: "Web Designer" },
    { image: teammember3, name: "Hasan Imam", designation: "UI Designer" },
  ];

  return (
    <section className="py-8 sm:py-16 bg-[#F1F1F1]">
      <Container>
      <div className="w-full sm:w-[35%] text-center mx-auto">
          <h2 className="text-[30px] sm:text-[40px] text-[#161616] font-Inter font-bold leading-tight">
            Our Work Portfolio
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[rgba(22,22,22,0.71)] font-Inter font-normal mt-2">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 py-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group w-full sm:w-[45%] md:w-[30%] lg:w-[30%] overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* Image with zoom and rotate */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform transition-transform duration-500 "
              />
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5956E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Text with fade-in and slide-up */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-[20px] font-bold font-Inter mt-72 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {member.name}
                </span>
                <span className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-Inter font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {member.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ThirdPart;
