import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../src/component/locales/en.json";
import ar from "../src/component/locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar }
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en", // في حالة عدم توفر ترجمة
  interpolation: { escapeValue: false }
});

export default i18n;
