import { useState } from "react";
import CardmanagersTable from "./CardTable/CardmanagersTable";

const Tables = () => {
  const [isTransform, setIsTransform] = useState("");
  const [value, setValue] = useState("");

  const handleTransform = (value) => {
    setIsTransform("show-zz");
    setValue(value);
  };

  return (
    <div  className="w-full px-4 md:px-8 lg:px-12">
      <CardmanagersTable data-aos="fade-down"
                        data-aos-delay={900 } isTransform={isTransform} setIsTransform={setIsTransform} Value={value} />

      <div data-aos="fade-left" className="relative flex rounded-3xl flex-col shadow-xl items-center justify-center mx-auto max-w-6xl">
        <div  className="w-full my-5 py-5 border-y-2  shadow-2xl rounded-3xl border-black/40  flex flex-col items-center justify-center  mx-4 sm:mx-8 lg:mx-12">
          <h1 data-aos="fade-down"
                        data-aos-delay={900 } className="text-lg dark:bg-gray-950/90 sm:text-2xl xl:text-3xl shadow-lg text-center text-black border-b-2 tracking-wider border-black p-2 -mt-6 bg-white rounded-3xl">
            Study schedules
          </h1 >

          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center md:gap-10 lg:gap-20 my-5">
            {["Level1", "Level2", "Level3", "Level4i", "Level4c"].map((level,index) => (
              <button
              data-aos="fade-down"
                        data-aos-delay={1000 *index}
                key={level}
                className="bg-black/5 shadow-2xl border-y-2 rounded-full hover:bg-black/20 transition-all border-black/40 text-black px-8 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  handleTransform(level);
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div  className="w-full m-10 px-4 md:px-12 py-5 border-y-2 rounded-3xl border-black/40">
          <h1  data-aos="fade-down"
                        data-aos-delay={ 900 } className="text-lg sm:text-2xl md:text-3xl shadow-lg text-center text-black border-b-2 tracking-wider border-black p-2 -mt-6 bg-white rounded-3xl">
            Important for students
          </h1>

          <div    data-aos-delay={1200 } className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-16 py-5">
          
            {["Estimates", "AcademicDegrees"].map((item,index) => (
              <button
                key={item}
                data-aos="fade-down"
                data-aos-delay={ 900*index*2 }
                className="bg-black/5 shadow-2xl border-y-2 rounded-full hover:bg-black/20 transition-all border-black/40 text-black px-8 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  handleTransform(item);
                }}
              >
                {item }
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
