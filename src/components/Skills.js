import "../css/Skills.css";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/Javascript.png";
import react from "../img/react.png";
import cplusplus from "../img/C++.png";
import python from "../img/python.png";
import tailwind from "../img/tailwind.png";
import bootstrap from "../img/Bootstrap.png";
import wordpress from "../img/wordpress.png";
import mongo from "../img/mongoDB.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Skills() {
  return (
    <div className="mt-32" id="skills">
      <div className="Skills">
        <h2 className="lg:text-5xl md:text-4xl text-3xl text-center underline">Techstack</h2>
        
        <Swiper className="mt-20"
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{clickable: true}}
          autoplay={{delay:1000}}
          scrollbar={{ draggable: true }}
          
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={html} alt="html"></img>
              <h3 className="mt-2 text-center">HTML</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={css} alt="css"></img>
              <h3 className="mt-2">CSS</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={javascript} alt="javascript"></img>
              <h3 className="mt-2">Javascript</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={react} alt="react"></img>
              <h3 className="mt-2">React</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={cplusplus} alt="C++"></img>
              <h3 className="mt-2">C++</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={python} alt="python"></img>
              <h3 className="mt-2">Python</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={tailwind} alt="tailwind"></img>
              <h3 className="mt-2">Tailwind CSS</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={bootstrap} alt="bootstrap"></img>
              <h3 className="mt-2">Bootstrap</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={mongo} alt="mongoDb"></img>
              <h3 className="mt-2">MongoDB</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={wordpress} alt="wordpress"></img>
              <h3 className="mt-2">Wordpress</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
