import Marquee from "react-fast-marquee"
import img1 from '../../assets/images/one.png'
import img2 from '../../assets/images/two.png';
import img3 from '../../assets/images/three.png';
import img4 from '../../assets/images/four.png';
import img5 from '../../assets/images/five.png';
import img6 from '../../assets/images/six.png';
import img7 from '../../assets/images/seven.png';
import img8 from '../../assets/images/eight.png';
import img9 from '../../assets/images/nine.png';
import img10 from '../../assets/images/ten.png';
import './Maurqee.css'
const Maurqee = () => {
  return (
    <div  data-aos="fade-right"  
          data-aos-delay={ 600 } 
          className=" dark:bg-slate-900 py-4 bg-black/10">
        <div className=" mb-12 text-center">
        <h1 className=" text-4xl dark:text-white font-bold text-[#000000]">Our Technology Partner</h1>
      </div>

      <div  data-aos="fade-up"  
        data-aos-delay={ 1000 }>
        <Marquee direction="right" speed={100} delay={0}   pauseOnHover={true}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Maurqee