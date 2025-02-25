import Cardmanagers from './cardHeader/Cardmanagers'; 
import Card2 from './card2';
import Card3 from './Card3';
import Card4 from './card4';
import Tables from './Tables';
import { useState } from "react";
import Clock from'./Clock';
const About = () => {

  const [showForm, setshowForm] = useState("");
  const [ValueUL,setValueUl] = useState("");


  const handleClick = ( value) => {
      setshowForm("show-cardAbout");
    setValueUl(value);
  };
  return (
    <div className='w-full'>
      <div>
      <Cardmanagers data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" showForm={showForm} setshowForm={setshowForm} Value={ValueUL} />
        <header   data-aos="zoom-in-up" className="w-[99%] dark:bg-dark shadow-2xl flex items-center flex-col bg-black/10  p-[10px] rounded-b-[50px] mx-3 mt-2 ">
          <h1 data-aos="fade-right" className='md:text-3xl text-[20px] font-extrabold shadow-2xl text-black border-b-2 md:tracking-[10px] tracking-[3px] border-black p-2 mb-3 rounded-[50px]'>College Administration</h1>

        <ul className='flex items-center md:justify-around flex-col   md:flex-row w-full'>
            <li 
            data-aos="zoom-in-up"
            
            className='py-5 '><a className='li shadow-2xl' onClick={(e) => { 
               e.preventDefault(); 
               handleClick(); 
               setValueUl("DeanOftheCollege");
             }} href="#">Dean of the College</a></li>

            <li  data-aos="zoom-in-up" className='py-5'><a  className='li shadow-2xl'
            onClick={(e)=>{
              e.preventDefault();
              handleClick();
              setValueUl("CollegeAgents");
            }} href="#">College Agents</a></li>

            <li   data-aos="zoom-in-up" className='py-5'><a className='li shadow-2xl'
            onClick={(e)=>{
              e.preventDefault();
              handleClick();
              setValueUl("Specialunits");
            }}  
            href="#">Special units</a></li>

            <li   data-aos="zoom-in-up" className='py-5'><a className='li shadow-2xl'
            onClick={(e)=>{
              e.preventDefault();
              handleClick();
              setValueUl("CollegeCouncil");
            }} href="#">College Council</a></li>

          </ul>
        </header>
        <Card2/>
        <Card3/>
        <Card4/>
        <Tables/>
<Clock/>




      </div>
      

      
    </div>
  )
}

export default About
