import { useTranslation } from "react-i18next";

export default function BtnLanguage() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 shadow-md">
      <h1 className="text-xl font-bold">🌍 {t("website_name")}</h1>
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {t("change_language")}
      </button>
    </nav>
  );
}