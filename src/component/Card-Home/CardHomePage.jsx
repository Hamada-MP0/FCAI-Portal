import { useTranslation } from "react-i18next";

const optionscard = {
    "important_links": [
        "research_topics",
        "electronic_survey",
        "study_agenda",
        "guides",
        "college_library",
        "email_portal",
        "employment_forum",
        "yearly_schedule",
    ],
};

const optionscard2 = {
    "units_centers": [
        "units_centers",
        "crisis_unit",
        "graduates_unit",
        "curriculum_dev_unit"
    ],
    "agencies": [
        "agencies",
        "education_affairs",
        "graduate_studies",
        "community_service"
    ]
};

const Card_Home = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <div className="my-10">
            <div className={`grid w-full shadow-2xl gap-4 lg:grid-cols-2 relative flex-wrap ${isArabic ? "rtl" : ""}`}>
    
                <div    data-aos="fade-down"
                                    data-aos-delay={ 300 }  className="m-5 w-[90%] rounded-l-[20px] p-[10px]">
                    <h2 className=" lg:text-[35px] text-[25px] text-center shadow-2xl  font-bold bg-red-800/90 rounded-[20px] p-[10px]">
                        {t("CardHome.important_links.important_links")}
                    </h2>
                    <ul className=" shadow-2xl ml-10 rounded-r-[20px] sm:rounded-r-[200px] mt-10 bg-gray-950/5 p-[10px]  ">
                        {optionscard.important_links.slice(1).map((item, index) => (
                            <li    data-aos="fade-left"
                            data-aos-delay={index * 300+ index * 300 } 
                             className=" list-disc pl-4 ml-10 pb-3 cursor-pointer  hover:text-red-500 lg:text-[25px] text-[20px]" key={index}>{t(`CardHome.important_links.${item}`)}</li>
                        ))}
                    </ul>
                </div>

          
                <div  className="grid text-center  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  mx-[10px]  ">
                    {Object.keys(optionscard2).map((card, index) => (
                        <div  data-aos="fade-down"
                        data-aos-delay={ 900*index } key={index} className=" text-black/70 shadow-2xl rounded-[20px] p-5 h-full flex flex-col justify-between">
                            <h2 className="lg:text-[35px]  text-[25px] font-bold shadow-2xl bg-red-800/90 rounded-[20px] p-[10px] text-center mb-3">
                                {t(`CardHome.${card}.${optionscard2[card][0]}`)}
                            </h2>
                            <ul className="list-disc mt-10 pl-5 space-y-2 flex-1  shadow-2xl bg-gray-950/5 rounded-t-[20px] rounded-b-[200px]">
                                {optionscard2[card].slice(1).map((item, idx) => (
                                    <li      data-aos="fade-left"
                                    data-aos-delay={index * 400+ idx * 300 } key={idx} className="list-disc  ml-5 lg:text-[20px] pt-5 wt-5 wx-5 pr-5  hover:text-red-500 border-b translate-x-1 transition-all ease-in-out duration-300 cursor-pointer border-gray-500/20 pb-1">
                                        {t(`CardHome.${card}.${item}`)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card_Home;
