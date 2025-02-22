import img from '../../assets/imageAbout/collage.jpg'
const Card2 = () => {
  return (
    <div className='relative'>
        <div    data-aos="fade-down"
                        data-aos-delay={900 }
         className='grid lg:grid-cols-2   lg:justify-between gap-9 lg:gap-32 shadow-2xl  border-b-2 border-black/80 rounded-b-[50px]'>
            <img    data-aos="zoom-in-up"
                        data-aos-delay={1200 } src={img} alt="" className='rounded-[20px] pr-5 pl-2 rounded-r-[40px] lg:m-16 m-1 mt-8' />
     <div  data-aos="zoom-in-up"
                        data-aos-delay={1200 } className='md:mr-14 m-5 lg:mt-16'>
        <h1 className='md:text-3xl  text-xl font-bold text-[#000000]'>The origin of the college :</h1>
               <h2 className='  md:m-[10px] md:text-xl text-base  font-[500] text-black/50 
               '>Presidential Decree No. 267 of 2006 was issued, which includes the establishment of the Faculty of Computers and Information at Fayoum University. The Supreme Council of Universities approved in its session dated 3/9/2006 the commencement of studies at the faculty as of the academic year 2006-2007.</h2>
             <h2 className='  m-[10px] text-base md:text-xl font-[600] text-black/80 '>All universities and international scientific 
                societies have agreed that the fo
                cus of interest of Information Sciences is the scientific
                 study of how to derive, generate, encode, transform, transmit,
                  collect, organize, store, retrieve, broadcast, measure and evaluate
                   information, which sheds light on the multiplicity of specializations, 
                   in addition to the existence of many interdisciplinary specializations.</h2>
                   <h2 className=' text-xl md:text-2xl font-[700] text-black/80 my-2 '>College Vision:</h2> 
             <h3 className='m-[10px] text-base md:text-xl font-[500] text-black/80 '>
                   Fayoum University College of Computers
                    and Information seeks to advance and excel
                     in the field of education and scientific research to 
                     achieve a prestigious position locally and internationally 
                     and develop the information society while adhering to professional ethics.
                     <br />
                     
                  <span className='m-[-10px] text-2xl font-[700] text-black/80 py-[10px]'> 
                  College Mission:</span>
                  <br/>
                  <br/>
                   Fayoum University College of Computers and Information seeks to prepare specialized and distinguished cadres in the field of computers and information technology, qualified and equipped with theoretical and applied foundations in the field of specialization and capable of continuous learning to compete in the labor market within a framework of ethical
                    values, and contribute to the 
                    development of scientific research 
                    and local and international cooperation to serve the community.</h3>
     </div>
   
   
        </div>
      
    </div>
  )
}

export default Card2
