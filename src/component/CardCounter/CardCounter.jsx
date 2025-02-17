import CountUp from 'react-countup';
import { useState, useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const CardCounter = ({title, icon, end}) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect the observer after first trigger
          observer.disconnect();
        }
      },
      // Configure the observer to trigger when element is 10% visible
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div  data-aos="fade-down"
    data-aos-delay={ 400 } ref={counterRef} className='relative flex transition-colors hover:bg-red-200 px-5 gap-4 rounded-lg w-[430px] bg-red-600 flex-col py-3 items-center justify-center before:content-[""] before:absolute before:top-4 before:-right-4 before:w-full before:h-full before:-z-10 before:border-[2px] before:border-cyan-800 before:rounded-lg'>
      {icon}
      <h1   data-aos="zoom-in-up"   data-aos-delay={ 600 } className='text-4xl font-[900] my-5'>{title}</h1>
      <div className="text-[50px] font-mono my-3 flex font-[900] space-x-0 text-center">
        {isVisible && <CountUp start={0} end={end} duration={4} />} 
        <span>+</span>
      </div>
      <p className='text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, perferendis nam. Quaerat, illum ab aperiam quam dolor eum laborum repellendus.
      </p>
    </div>
  );
};

export default CardCounter;