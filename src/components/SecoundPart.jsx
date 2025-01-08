import React from "react";
import Container from "./Container";
import portfolio from "../assets/portfolio.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";
import portfolio6 from "../assets/portfolio6.png";
import portfolio7 from "../assets/portfolio7.png";
import { FaArrowRight } from "react-icons/fa";

const SecoundPart = () => {
  const portfolios = [
    portfolio,
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
  ];

  return (
    <section className="pt-16 pb-10 bg-[rgba(225,225,225,0.29)]">
      <Container>
        <div className="w-full sm:w-[35%] text-center mx-auto">
          <h2 className="text-[30px] sm:text-[40px] text-[#161616] font-Inter font-bold leading-tight">
            Our Work Portfolio
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[rgba(22,22,22,0.71)] font-Inter font-normal mt-2">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer">
          {portfolios.map((image, index) => (
            <div
              key={index}
              className="relative group w-full h-[320px] overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image with zoom and rotate */}
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
              />
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5956E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Text with fade-in and slide-up */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-lg font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Graphic Design
                </span>
                <p className="text-white text-lg font-bold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  See Details <FaArrowRight />
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SecoundPart;
