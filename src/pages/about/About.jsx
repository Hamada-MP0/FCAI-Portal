import Cardmanagers from './cardHeader/Cardmanagers'; 
import Card2 from './card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Tables from './Tables';
import { useState   , useMemo, useCallback} from "react";
import Clock from'./Clock';


const About = () => {
  const [loading, setLoading] = useState(false);
  const MemoizedClock = useMemo(() => <Clock />, []);

  const [showForm, setshowForm] = useState("");
  const [ValueUL,setValueUl] = useState("");

      const memoizedCardManager = useMemo(() => {
        return loading ? (
          <div className="flex justify-center items-center py-5">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <Cardmanagers 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            showForm={showForm} 
            setshowForm={setshowForm} 
            Value={ValueUL} 

          />
        );
      }, [ValueUL, showForm, loading]);
      
      const handleClick = useCallback((e, value) => {
        e.preventDefault();
      

        if (loading) return;
      
  
          setLoading(true);

          setTimeout(() => { 
            setshowForm("show-cardAbout");
            setValueUl(value);
            setLoading(false);
          }, 500);
  
      }, [ValueUL, loading]);
      

  return (
    <div className='w-full mt-28 dark:bg-black/60'>
      <div>
   {memoizedCardManager}
        <header   data-aos="zoom-in-up" className="w-[99%] dark:bg-dark shadow-2xl flex items-center flex-col dark:bg-black  bg-black/10  p-[10px] rounded-b-[50px] mx-3 mt-2 ">
          <h1  data-aos="fade-right" className='md:text-3xl dark:text-white dark:border-white text-[20px] font-extrabold shadow-2xl text-black border-b-2 md:tracking-[10px] tracking-[3px] border-black p-2 mb-3 rounded-[50px]'>College Administration</h1>

        <ul className='flex items-center md:justify-around flex-col    lg:flex-row w-full'>
            <li 
            data-aos="zoom-in-up"
            
            className='py-5 '><a className='li dark:text-white shadow-2xl' onClick={(e) => handleClick(e,"DeanOftheCollege")
             } href="#">Dean of the College</a></li>

            <li  data-aos="zoom-in-up" className='py-5'><a  className='li shadow-2xl dark:text-white'
   onClick={(e) => handleClick(e,"CollegeAgents")
            } href="#">College Agents</a></li>

            <li   data-aos="zoom-in-up" className='py-5'><a className='li shadow-2xl dark:text-white'
           onClick={(e) => handleClick(e,"Specialunits")
            }
            href="#">Special units</a></li>

            <li   data-aos="zoom-in-up" className='py-5'><a className='li shadow-2xl dark:text-white'
          onClick={(e) => handleClick(e,"CollegeCouncil")
            } href="#">College Council</a></li>

          </ul>
        </header>
        <Card2/>
        <Card3/>
        <Card4/>
        <Tables/>
{MemoizedClock}




      </div>
      

      
    </div>
  )
}

export default About
