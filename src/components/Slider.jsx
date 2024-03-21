import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneplusCardImage from "./img/onepluspanoramic.png";
import XiaomiCardImage from "./img/xiaomipanoramic.png";
import RealmeCardImage from "./img/realmeGt.png";
import SamsungCardImage from "./img/samsungs24.png";

const phones = [
  { id: 1, name: "OneplusCard", image: OneplusCardImage },
  { id: 2, name: "XiaomiCard", image: XiaomiCardImage },
  { id: 3, name: "RealmeCard", image: RealmeCardImage },
  { id: 4, name: "SamsungCard", image: SamsungCardImage },
];

const ImageSlider = () => {
  const sliderContainerStyle = {
    position: 'relative',
    zIndex: -1,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={sliderContainerStyle}> 
      <Slider {...settings}>
        {phones.map((phone) => (
          <div key={phone.id}>
            <img src={phone.image} alt={phone.name} style={{ width: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
