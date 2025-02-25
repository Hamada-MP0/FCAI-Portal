/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import Image7 from "../../assets/image/1203951.jpg";
import Image6 from "../../assets/image/1203971.jpg";
import Image5 from "../../assets/image/1204291.jpg";
import Image4 from "../../assets/image/1205321.jpg";
import Image3 from "../../assets/image/1207051.jpg";
import Image2 from "../../assets/image/1207281.jpg";
import Image1 from "../../assets/image/1209971.jpg";

const Heroslider = () => {
  const { t } = useTranslation(); // جلب اللغة الحالية

  // بيانات الصور والوصف
  const ImageList = [
    { id: 51, img: Image4, description: t("sliders.news.art") },
    { id: 41, img: Image5, description: t("sliders.news.theater") },
    { id: 13, img: Image6, description: t("sliders.news.college") },
    { id: 21, img: Image7, description: t("sliders.news.competition") },
    { id: 1, img: Image1, description: t("sliders.news.lecture") },
    { id: 2, img: Image2, description: t("sliders.news.postgraduate") },
    { id: 3, img: Image3, description: t("sliders.news.first_semester") },
  ];

  return (
    <div className="relative  min-full h-full pt-20 lg:w-[100%] sm:min-h-[800px] dark:bg-black flex justify-center items-center  dark:text-white duration-200">
      {/* خلفية */} 
      {/* <div className="absolute w-[700px] h-[700px] rotate-[40deg] top-[-300px] right-[50px] bg-red-500 opacity-30 rounded-full overflow-hidden"></div> */}

      {/* محتوى الصفحة */}
      <div className="  w-[100%]">
        <Swiper
           effect="coverflow"
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={"auto"}
           coverflowEffect={{
             rotate: 40,  
             stretch: 50, // مدى تباعد الشرائح
             depth: 2000, // عمق التأثير ثلاثي الأبعاد
             modifier: 1, // التحكم في التأثير
             slideShadows: false , // تمكين الظلال
           }}
           pagination={{ clickable: true }}
           autoplay={{ delay: 3000, disableOnInteraction: false }}
           loop={true} 
           modules={[EffectCoverflow, Pagination, Autoplay]}
           className="w-full max-w-[100%] sm:max-w-[800px] md:max-w-[100%] "
           data-aos="zoom-in-down"
         >
           {ImageList.map((data) => (
             <SwiperSlide key={data.id} className="w-[250px] sm:w-[300px]  lg:w-[600px]">
               <div  data-aos="pop-up" className="flex flex-col  justify-center items-center">
                 {/* النص */}
                 <div className="flex justify-center dark:text-white dark:bg-white/40 opacity-70  items-center text-center  relative leading-6 px-3 z-10 bg-black/30 dark:bg-black rounded-e-full sm:h-[150px]  sm:w-[550px] lg:w-[900px] h-[100px]  shadow-2xl">
                   <p className=" lg:text-2xl  sm:text-lg text-[13px] font-[Open_Sans]  font-[500]  mx-4">{data.description}</p>
                 </div>
 
                 {/* الصورة */}
                 <div className="relative z-10 mt-3">
                   <img
                     src={data.img}
                     alt="Slider Image"
                     className="lg:min-w-[900px] w-full  h-[250px] sm:h-[450px] object-cover rounded-t-[100px] rounded-b-[100px] shadow-2xl"
                   />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Heroslider;