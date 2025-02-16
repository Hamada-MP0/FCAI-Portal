import { useTranslation } from "react-i18next";
import Banner from "../../assets/image/footer-pattern-red.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "en"; 

  const footerLinks = {
    "About-the-College": ["About", "Establishmen", "Logo", "Vision", "Mission"],
    "College-Administration": ["Administration", "Dean", "Agents", "Council", "Director"],
  };

  return (<>
  
  <div style={BannerImg} className="text-white w-full py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-10">

          {/* 🗺️ خريطة جوجل */}
          <div
            data-aos="zoom-in-up"
            className={`w-[350px] md:w-[700px] md:mx-auto lg:w-[350px] ${
              isArabic ? "order-2 sm:order-2" : "order-1 sm:order-1"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.7260059514147!2d30.836051023804536!3d29.319711852542955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459793d9d2458b5%3A0xafc7f3258784c2f3!2z2YPZhNmK2Kkg2KfZhNit2KfYs9io2KfYqiDZiNin2YTYsNmD2KfYoSDYp9mE2KfYtdi32YbYp9i52Yog2KzYp9mF2LnYqSDYp9mE2YHZitmI2YU!5e0!3m2!1sar!2seg!4v1739461788110!5m2!1sar!2seg"
              width="100%"
              height="250"
              className="border-none rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            className={`flex flex-wrap gap-10 ${
              isArabic ? "order-1 sm:order-1" : "order-2 sm:order-2"
            }`}
          >
            {Object.keys(footerLinks).map((sectionKey, index) => (
              <div key={sectionKey} className="w-[200px]">
                <h3
                  data-aos="fade-right"
                  className="text-lg from-neutral-800 border-b-2 pb-2 mb-2 relative hover:text-red-800  hover:scale-150 transition-all ease-in duration-300"
                >
                  {t(`footer.${sectionKey}.${footerLinks[sectionKey][0]}`)}
                </h3>
                <ul className="space-y-2 relative">
                  {footerLinks[sectionKey].slice(1).map((itemKey, i) => (
                    <li
                      key={itemKey}
                      data-aos="fade-left"
                      data-aos-delay={index * 320 + i * 200}
                      className="relative text-sm hover:text-red-400 transition-all ease-in duration-300 cursor-pointer"
                    >
                      <a href="#" className="inline-block transform transition-all duration-300 ease-in hover:translate-x-7">{t(`footer.${sectionKey}.${itemKey}`)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/*  وسائل التواصل الاجتماعي ومعلومات الاتصال */}
          <div
            data-aos="zoom-in-up"
            className={`flex flex-col items-start gap-4 ${
              isArabic ? "order-3 sm:order-3" : "order-3 sm:order-3"
            }`}
          >
            {/* أيقونات السوشيال ميديا */}
            <div className="flex items-center gap-3 ">
              <a data-aos="zoom-in-down" data-aos-delay="300" href="#">
                <FaInstagram className="text-3xl hover:scale-150 transition-all ease-in duration-300 hover:text-red-600 transition"  />
              </a>
              <a data-aos="zoom-in-down" data-aos-delay="400" href="#">
                <FaFacebook className="text-3xl hover:scale-150 transition-all ease-in duration-300 hover:text-blue-500 transition" />
              </a>
              <a data-aos="zoom-in-down" data-aos-delay="500" href="#">
                <FaLinkedin className="text-3xl hover:scale-150 transition-all ease-in duration-300  hover:text-blue-500 transition" />
              </a>
            </div>

            {/*  معلومات الاتصال */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 cursor-pointer">
                <FaLocationArrow className="hover:text-blue-400 hover:scale-150 transition-all ease-in duration-300" />
                <p className="hover:text-red-300">{t("footer.Contact Us.Contact")}</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <FaMobileAlt className="hover:text-blue-400 hover:scale-150 transition-all ease-in duration-300" />
                <p className="hover:text-red-300">{t("footer.Contact Us.Email")}</p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <FaMobileAlt className="hover:text-blue-400 hover:scale-150 transition-all ease-in duration-300" />
                <p className="hover:text-red-300">{t("footer.Contact Us.Phone")}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <div className="w-[100%]  h-5 bg-red-500 "></div>
  </>
  );
};

export default Footer;
