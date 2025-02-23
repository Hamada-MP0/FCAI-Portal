import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { createContext, useEffect, useState } from "react";
import {  NavLink, Outlet } from 'react-router-dom';
import axios from "axios";
import librarySlide1 from '../../assets/librarySlide1.jpg'
import librarySlide2 from '../../assets/librarySlide2.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Create context with initial null value
export const LibraryContext = createContext(null);

const Library = () => {
  const [books, setBooks] = useState([]);

  const getData = () => {
    axios.get("https://gutendex.com/books/")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
        
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <LibraryContext.Provider value={books}>
      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop
        >
          <SwiperSlide className=''>
            <div className="w-full relative h-[500px]">
              
                <img data-aos="zoom-in" className='h-full w-full' src={librarySlide1} alt="" />
                <div data-aos="fade-up-right" className="absolute bottom-[20px] left-[20px] transform flex flex-col gap-5 -translate-y-1/2 text-white text-center">
                    <span className='text-5xl font-bold'>More Knowlage</span>
                    <button  className='bg-blue-800 px-4 py-2 rounded-lg hover:opacity-95'>Read Now</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=''>
            <div className="w-full relative h-[500px]">
                <img data-aos="zoom-in" className='h-full w-full' src={librarySlide2} alt="" />
                <div data-aos="fade-up-right" className="absolute bottom-[20px] left-[20px] transform flex flex-col gap-5 -translate-y-1/2 text-white text-center">
                    <span className='text-5xl font-bold'>More Knowlage</span>
                    <button onClick={()=>(window.scrollY === 631)  }  className='bg-blue-800 px-4 py-2 rounded-lg hover:opacity-95'>Read Now</button>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
        
        <div className="w-full bg-gray-800">
          <div className="container mx-auto py-10">
            <ul className='flex text-white gap-5 border-b-2'>
              <NavLink 
                to="best_books" 
                className={({ isActive }) => 
                  `mb-2 ml-2 transition-all duration-300 pb-1 ${
                    isActive 
                      ? 'text-orange-400 border-b-2 border-blue-400 ' 
                      : 'hover:text-blue-300'
                  }`
                }
              >
                <li>Best Books</li>
              </NavLink>
              <NavLink 
                to='all_books' 
                className={({ isActive }) => 
                  `mb-2 ml-2 transition-all duration-300 pb-1 ${
                    isActive 
                      ? 'text-orange-400 border-b-2 border-blue-400 ' 
                      : 'hover:text-blue-300'
                  }`
                }
              >
                <li>All Books</li>
              </NavLink>
              <NavLink 
                to='favourite' 
                className={({ isActive }) => 
                  `mb-2 ml-2 transition-all duration-300 pb-1 ${
                    isActive 
                      ? 'text-orange-400 border-b-2 border-blue-400 ' 
                      : 'hover:text-blue-300'
                  }`
                }
              >
                <li>Favourite</li>
              </NavLink>
            </ul>
            <div className="mt-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </LibraryContext.Provider>
  );
};

export default Library;