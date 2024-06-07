import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const reverseSettings = {
   ...settings,
    rtl: true, 
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Slider {...settings}>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 3" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 4" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 5" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 6" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 7" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-1.jpg" alt="Image 8" className="w-full h-auto" />
        </div>
      </Slider>
      <Slider {...reverseSettings}>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 9" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 10" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 11" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 12" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 13" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 14" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 15" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/bg-2.jpg" alt="Image 16" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;