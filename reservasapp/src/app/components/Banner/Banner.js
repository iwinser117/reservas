"use client";
import { useState } from "react";
import Slider from "react-slick";
import { Image } from "../../../lib/mui";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [images] = useState([
    "https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg?size=426&ext=jpg&ga=GA1.1.87170709.1706400000&semt=sph",
    "https://img.freepik.com/fotos-premium/camino-madera-conduce-cadena-montanosa-puesta-sol-detras-ella_865967-31158.jpg",
    "https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg?size=426&ext=jpg&ga=GA1.1.87170709.1706400000&semt=sph",
    'https://static.vecteezy.com/system/resources/previews/015/974/067/non_2x/starry-night-landscape-in-forest-scenery-illustration-vector.jpg'
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 200000,
    
    fade: true,
    className: "center",
    centerMode: true,
  };

  return (
    <div className="content-center flex h-screen">
      <div className="m-auto w-3/4 ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-96 h-96 flex flex-wrap content-center justify-items-center justify-center"
            >
              <div className="flex justify-center place-items-center h-">
                <Image
                isBlurred
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
