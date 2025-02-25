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

const 

Card_Home = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <div className="w-full px-4 py-8  sm:px-6 lg:px-8">
            <div className={`grid w-full gap-6 md:gap-8 lg:grid-cols-2 ${isArabic ? "rtl" : ""}`}>
    
                {/* Important Links Section */}
                <div data-aos="fade-down"
                     data-aos-delay={300}
                     className="w-full rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center dark:text-white font-bold bg-red-800/90 rounded-lg p-4">
                        {t("CardHome.important_links.important_links")}
                    </h2>
                    <ul className="mt-6 sm:mt-8 shadow-2xl rounded-lg sm:rounded-r-[100px] dark:bg-gray-950/50 p-4 sm:p-6">
                        {optionscard.important_links.slice(1).map((item, index) => (
                            <li data-aos="fade-left"
                                data-aos-delay={index * 300}
                                className="list-disc dark:text-white pl-2 sm:pl-4 ml-4 sm:ml-6 pb-3 cursor-pointer hover:text-red-500 
                                         text-base sm:text-lg lg:text-xl xl:text-2xl transition-colors duration-200"
                                key={index}>
                                {t(`CardHome.important_links.${item}`)}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Units and Agencies Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {Object.keys(optionscard2).map((card, index) => (
                        <div data-aos="fade-down"
                             data-aos-delay={900 * index}
                             key={index}
                             className="flex flex-col h-full rounded-lg p-4 sm:p-5">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl dark:text-white font-bold shadow-xl 
                                         bg-red-800/90 rounded-lg p-3 sm:p-4 text-center mb-4">
                                {t(`CardHome.${card}.${optionscard2[card][0]}`)}
                            </h2>
                            <ul className="flex-1 list-disc mt-6 space-y-3 dark:bg-gray-950/50 shadow-xl 
                                         bg-gray-950/5 rounded-t-lg rounded-b-[100px] p-4 sm:p-6">
                                {optionscard2[card].slice(1).map((item, idx) => (
                                    <li data-aos="fade-left"
                                        data-aos-delay={index * 400 + idx * 300}
                                        key={idx}
                                        className="list-disc w-fit dark:text-white ml-4 text-sm sm:text-base lg:text-lg
                                                 hover:text-red-500 transition-all duration-300 cursor-pointer 
                                                 border-b border-transparent hover:border-gray-500/20 pb-2">
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
