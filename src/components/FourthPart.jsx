import React from 'react';
import Container from './Container';
import customerSlickimg from "../assets/customerSlickimg.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FourthPart = () => {
  // Custom Arrow Components
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-transparent text-black font-bold"
        onClick={onClick}
        style={{ left: '10px', zIndex: 10 }}
      >
        &lt; {/* Custom left arrow icon */}
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-transparent text-[#161616] font-bold"
        onClick={onClick}
        style={{ right: '10px', zIndex: 10 }}
      >
        &gt; {/* Custom right arrow icon */}
      </button>
    );
  };

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Autoplay
    autoplaySpeed: 3000, // Autoplay speed
    arrows: true, // Show next/prev arrows
    prevArrow: <PrevArrow />, // Custom left arrow
    nextArrow: <NextArrow />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024, // Tablet screens
        settings: {
          slidesToShow: 3, // Show 3 slides on tablet
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-20">
      <Container>
      <div className="w-full sm:w-[40%] mb-10">
    <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] text-[#161616] font-Inter font-bold leading-tight">
        We Care About Our Customer Experience Too
    </h2>
    <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-[rgba(22,22,22,0.71)] font-Inter font-normal mt-2">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
    </p>
</div>

        {/* React Slick Carousel */}
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="text-center relative overflow-hidden">
              <img
                src={customerSlickimg}
                alt="Customer 1"
                className="mx-auto shadow-xl lg:shadow-none"
              />
              <p className="mt-4 text-lg font-medium">Customer Feedback 1</p>
            </div>

            {/* Slide 2 */}
            <div className="text-center relative overflow-hidden">
              <img
                src={customerSlickimg}
                alt="Customer 2"
                className="mx-auto shadow-xl lg:shadow-none"
              />
              <p className="mt-4 text-lg font-medium">Customer Feedback 2</p>
            </div>

            {/* Slide 3 */}
            <div className="text-center relative overflow-hidden">
              <img
                src={customerSlickimg}
                alt="Customer 3"
                className="mx-auto shadow-xl lg:shadow-none"
              />
              <p className="mt-4 text-lg font-medium">Customer Feedback 3</p>
            </div>

            {/* Slide 4 */}
            <div className="text-center relative overflow-hidden">
              <img
                src={customerSlickimg}
                alt="Customer 4"
                className="mx-auto shadow-xl lg:shadow-none"
              />
              <p className="mt-4 text-lg font-medium">Customer Feedback 4</p>
            </div>

            {/* Add more slides as needed */}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default FourthPart;
