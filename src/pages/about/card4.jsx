const optionscard2 = [
    {
      category: "Academic Degrees",
      degrees: `- Bachelor's Degree in Specialization\n- Higher Diploma\n- Master's Degree\n- Doctorate`,
      summer_enrollment: "",
    },
    {
      category: "Tuition Fees",
      degrees: `- Initial Registration: 1500 USD (one-time fee for all degrees)\n- Bachelor's Fee: 5000 USD per year\n- Master's/PhD Fee: 5500 USD per year`,
      summer_enrollment: "",
    },
    {
      category: "College Admission Dates",
      degrees: `Applications open from late April and early May each year, extending until late June.\nThe second phase starts in mid-June and lasts until the end of August.\nThe third phase starts in September and continues until December.\nThe fourth phase begins in January each year, subject to available seats.`,
      summer_enrollment: "Starts in June and ends in August.",
    },
  ];
  
  const Card4 = () => {
    return (
      <div>
        <section className="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              {optionscard2.map((option, index) => (
                <div
                  key={index}
                    data-aos="zoom-in-up"
                  data-aos-delay={200*index }
                  className="w-full shadow-2xl md:w-1/2 xl:w-1/3 px-10"
                >
                  <div className="h-full flex flex-col justify-between rounded-lg border-2 shadow-2xl  border-black bg-white dark:bg-dark-2 overflow-hidden">
                    <div className="w-full h-48 flex items-center justify-center bg-gray-100">
                      <img
                       data-aos="fade-down"
                       data-aos-delay={ 1200*index }
                        src={`https://cdn.tailgrids.com/2.0/image/application/images/cards/card-0${index + 1}/image-01.jpg`}
                        alt="image"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6 px-10 flex flex-col flex-grow justify-between text-center">
                      <h3 data-aos="fade-down"
                        data-aos-delay={ 900*index } className="text-dark dark:text-white text-xl font-semibold mb-4">
                        
                        {option.category}
                      </h3>
                      <ul  data-aos="fade-down"
                        data-aos-delay={ 1200*index } className="text-base leading-relaxed list-disc text-body-color text-left mb-6">
                        {option.degrees.split("\n").map((degree, i) => (
                          <li  data-aos="zoom-in-up"
                          data-aos-delay={500 *i} key={i} className="mb-2">{degree}</li>
                        ))}
                        {option.summer_enrollment && (
                          <li className="text-red-500 font-semibold"
                          data-aos="fade-down"
                          data-aos-delay={ 900*index }>
                            {option.summer_enrollment}
                          </li>
                        )}
                      </ul>
                      <a
                       data-aos="fade-down"
                       data-aos-delay={ 900*index }
                        href="#"
                        className="inline-block py-2 px-7 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-red-600 border-gray-3 hover:text-white dark:border-dark-3 dark:text-dark-6"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Card4;
      