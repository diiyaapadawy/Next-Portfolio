// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/design 6.png",
          toLink: "https://homeeland.netlify.app/",
        },
        {
          title: "title",
          path: "/design 5.png",
          toLink: "https://ecommercee-shop.netlify.app/",
        },
        {
          title: "title",
          path: "/design 1.png",
          toLink: "https://diiyaapadawy.github.io/Organic_Food_website/",
        },
        {
          title: "title",
          path: "/design 3.png",
          toLink: "https://diiyaapadawy.github.io/Modern_Home_website./",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/design 7.png",
          toLink: "https://diiyaapadawy.github.io/Gym__website/",
        },
        {
          title: "title",
          path: "/design 4.png",
          toLink: "https://diiyaapadawy.github.io/Electronic_Shop/",
        },
        {
          title: "title",
          path: "/design 2.png",
          toLink: "https://diiyaapadawy.github.io/My-Portfolio/",
        },
        {
          title: "title",
          path: "/design 8.jpg",
          toLink: "https://diiyaapadawy.github.io/Electronic_Shop/",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";
//icons
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* images */}
                      <Image src={image.path} width={500} height={300} alt="" />

                      {/* overLay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <a
                            href={image.toLink}
                            className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                          >
                            <div className="delay-100">Live</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              Project
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
