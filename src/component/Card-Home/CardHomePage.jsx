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
            <div className={`grid w-full gap-5 lg:grid-cols-2 relative flex-wrap ${isArabic ? "rtl" : ""}`}>
    
                <div    data-aos="fade-down"
                                    data-aos-delay={ 300 }  className="m-5 w-[90%] bg-red-200 rounded-[20px] p-[10px]">
                    <h2 className=" lg:text-[35px] text-[25px] text-center font-bold">
                        {t("CardHome.important_links.important_links")}
                    </h2>
                    <ul className=" px-[10px] list-disc ml-5">
                        {optionscard.important_links.slice(1).map((item, index) => (
                            <li    data-aos="fade-left"
                            data-aos-delay={index * 300+ index * 300 } 
                             className=" hover:text-red-500 lg:text-[25px] text-[20px]" key={index}>{t(`CardHome.important_links.${item}`)}</li>
                        ))}
                    </ul>
                </div>

          
                <div  className="grid m-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  mx-[10px] gap-5 ">
                    {Object.keys(optionscard2).map((card, index) => (
                        <div  data-aos="fade-down"
                        data-aos-delay={ 900*index } key={index} className="bg-red-200 text-white rounded-[20px] p-5 h-full flex flex-col justify-between">
                            <h2 className="lg:text-[30px] text-xl font-bold text-center mb-3">
                                {t(`CardHome.${card}.${optionscard2[card][0]}`)}
                            </h2>
                            <ul className="list-disc mt-6 pl-5 space-y-2 flex-1 ">
                                {optionscard2[card].slice(1).map((item, idx) => (
                                    <li      data-aos="fade-left"
                                    data-aos-delay={index * 400+ idx * 300 } key={idx} className="lg:text-[20px] pt-3 hover:text-red-500 border-b translate-x-1 transition-all ease-in-out duration-300 cursor-pointer border-gray-500 pb-1">
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
