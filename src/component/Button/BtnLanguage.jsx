import { useTranslation } from "react-i18next";

const BtnLanguage = () => {
  
  const { t, i18n } = useTranslation();


  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  return (
    <div>


  <div>
      <nav   data-aos="zoom-in-down"
                                    data-aos-delay={ 1000 }
                                     className="  bg-slate-400/30 hover:bg-slate-400/50 flex justify-between items-center  mt-2 rounded-lg ">
      <button
        onClick={toggleLanguage}
        className="px-2 py-2  text-black border-none"
      >
        {t("change_language")}
      </button>
    </nav>
  </div>
  

    </div>
  )
}

export default BtnLanguage
