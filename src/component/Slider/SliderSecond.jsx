import { motion } from 'framer-motion'
import imags from './image'
import { useEffect,useRef, useState } from 'react'

const SliderSecond = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const sliderRef = useRef(null)
    useEffect(() => {
        // console.log(sliderRef.current.scrollWidth);//3648
        // console.log(sliderRef.current.offsetWidth);//2016
        setActiveIndex(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth+70)
      }, [])
  return (
    <div>
      <motion.div ref={sliderRef} className='mx-[13vw] cursor-grab overflow-hidden'>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -activeIndex }} className=' flex '>
            {imags.map((item, index) => (
              <motion.div className='md:min-w-[29rem] sm:w-[20rem]  md:min-h-[30rem] md:mx-[10px] px-[20px] min-h-[20rem] min-w-[20rem] py-[40px]' key={index}>
                <img className='w-[100%]  h-[100%] rounded-[20px] pointer-events-none' src={item} alt="" />
              </motion.div>
            ))}

        </motion.div>

      </motion.div>
    </div>
  )
}

export default SliderSecond
