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
    <>{/*
    Heads up! 👋
  
    This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  */}

      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your

              <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section></>
  );
};

export default Banner;
