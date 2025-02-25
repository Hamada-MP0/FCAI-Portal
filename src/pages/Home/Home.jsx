import CardCounter from "../../component/CardCounter/CardCounter"
import Maurqee from "../../component/Maurqee/Maurqee"
import Slider from '../../component/Slider/Slider'
import Card_Home from '../../component/Card-Home/CardHomePage'
import logo from '../../assets/logo.png'
import SliderSecond from "../../component/Slider/SliderSecond"
const Home = () => {
  return (
    <div className="flex flex-col mt-5 min-h-screen"> 
      <Slider/>
      {/* Main container with flex layout */}
      <div className="flex shadow-2xl dark:bg-slate-900/90 flex-col xl:flex-row-reverse w-full gap-4  p-4 sm:p-6 lg:p-8">
        {/* Main content area */}
        <div className="flex-1 flex shadow-2xl rounded-lg dark:bg-black/40 flex-col sm:justify-center sm:items-center w-full xl:w-3/4">
          <Card_Home/>
          {/* Counter cards container with flex */}
          <div className="flex flex-wrap justify-center gap-6 py-5">
            <div data-aos="zoom-in-down"
                 data-aos-delay={ 1500 } 
                 className="flex-1 rounded-[80px] flex mb-2 min-w-[300px] max-w-[450px]">
              <CardCounter 
                title={"student"} 
                end={1043} 
                icon={<i className='bx bxs-graduation text-[100px]'></i>}
              />
            </div>
            <div data-aos="zoom-in-down"
                 data-aos-delay={ 500 } 
                 className="flex-1 rounded-[80px] flex mb-2 min-w-[300px] max-w-[450px]">
              <CardCounter 
                title={"teachers"} 
                end={50} 
                icon={<i className='bx bxs-edit-alt text-[100px]'></i>}
              />
            </div>
            <div data-aos="zoom-in-down"
                 data-aos-delay={ 1000 } 
                 className="flex-1 rounded-[80px] flex mb-2 min-w-[300px] max-w-[450px]">
              <CardCounter 
                title={"tutorials"} 
                end={30} 
                icon={<i className='bx bx-book-open text-[100px]'></i>}
              />
            </div>
          </div>
        </div>

        {/* Sidebar with fixed width on larger screens */}
        <div  
        data-aos="fade-right"  
        data-aos-delay={ 100 }
        className=" shadow-2xl dark:bg-gray-950/50 w-full xl:w-1/4 xl:min-w-[280px] xl:max-w-[320px] mx-auto rounded-xl p-4 flex flex-col items-center shadow-lg bg-slate-100">
          {/* Rest of sidebar content remains the same */}
          <div className="w-32 sm:w-48 xl:w-full max-w-[256px] dark:bg-transparent  bg-slate-400 my-4 rounded-full overflow-hidden">
            <img  
              src={logo} 
              className=" shadow-2xl w-full h-auto" 
              alt="logo" />
          </div>
          <div  
            data-aos="fade-right"  
            data-aos-delay={ 500 } className="w-full space-y-4">
            <div className="flex items-center">
              <i className='bx bx-home-alt mr-3 dark:text-white text-xl'></i>
              <span className="font-bold dark:text-white">Address</span>
            </div>
            <div  
                  data-aos="fade-right"  
                  data-aos-delay={ 900 } 
                  className="mx-2">
              <p className="text-sm md:text-base  dark:text-white">fayoum university - st.tawfiq elhakeem - fayoum - egypt</p>
            </div>
            <hr/>
            <div  
              data-aos="fade-right"  
              data-aos-delay={ 1300 } 
              className="flex items-center">
              <i className='bx bx-world mr-3 dark:text-white text-xl'></i>
              <span className="font-bold dark:text-white">website:</span>
            </div>
            <p  
              data-aos="fade-right"  
              data-aos-delay={ 1600 } 
              className="ml-2 dark:text-white">
              <a href="#" className="text-blue-600 hover:underline text-sm dark:text-white md:text-base">http://fayoum.eg.com</a>
            </p>
            <hr/>
            <div  
              data-aos="fade-right"  
              data-aos-delay={ 600 } 
              className="flex items-center dark:text-white">
              <i className='bx bxs-phone mr-3 text-xl'></i>
              <span className="font-bold dark:text-white">phone number</span>
            </div>
            <p className="ml-2 text-sm dark:text-white md:text-base">0842154835</p>
          </div>
        </div>
      </div>
      <SliderSecond/>
      <Maurqee/>
    </div>
  )
}

export default Home