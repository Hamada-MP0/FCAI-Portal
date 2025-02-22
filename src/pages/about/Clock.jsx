import Marquee from "react-fast-marquee"
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // تحديث كل ثانية

    return () => clearInterval(interval); // تنظيف الـ interval عند إلغاء تحميل المكون
  }, []);


  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours} :  ${minutes}  :  ${seconds}`;
  };
  return (
    <div  className="mt-14 rounded-t-[50px] pb-4 shadow-2xl bg-black/5">
        <div className=" mb-2 text-center shadow-2xl">
        <h1 data-aos="fade-down"
                                    data-aos-delay={ 1200 } className="md:text-2xl px-5 shadow-2xl font-bold text-[#664040]">The Seventh Employment Forum at the Faculty of Computers and Information, Fayoum University</h1>
        <div  data-aos="fade-down"
                                    data-aos-delay={ 600 } className=" sm:text-3xl font-bold text-center p-4  rounded-md shadow-2xl" style={{ wordSpacing: "2rem" }}>
      🕒 {formatTime(time)}
    </div>

      </div>

      <div>
        <Marquee direction="left" speed={100} delay={0}   pauseOnHover={true}>
         <div>
          <h1  data-aos="zoom-in-up"
                                    data-aos-delay={ 600 } className="shadow-2xl text-2xl  font-bold  text-[#ce2d2d]" style={{ wordSpacing: "2rem" }}>
          The Faculty of Computers and Information announces, under the patronage of Prof. Dr. / Mohamed Khafaga - Dean of the Faculty, the Seventh Employment Forum at the Faculty of Computers and Information, Fayoum University. The Seventh Employment Forum of the Faculty of Computers and Information - Fayoum University will be held on Thursday 7/28/2022 AD at the Norias Hotel in Shakshouk Village. A number of public figures will attend the forum. Companies participating in the forum: Huawei IBM Egyptian Telecommunications Company National Company for Digital Data Management Emisal Fayoum Oncology Center Engineering Company for Integrated Systems Dell EMC Microsoft DXC DWF Green Media professionals participating in the forum: Mr. / Osama Kamal Mr. / Imad El-Din Hussein Mr. / Khaled Abu Bakr Mr. / Ahmed Raafat Forum invitation Forum agenda
          </h1>
          </div> 
       </Marquee>
      </div>
    </div>
  )
}

export default Clock