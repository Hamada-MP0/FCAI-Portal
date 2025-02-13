
import DarkMode from './component/dark&light/DarkMode'
import BtnLanguage from './component/Button/BtnLanguage'
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();


  return (
    <>
    <div className="text-3xl font-bold bg-red-500 dark:bg-white dark:text-black">
      <DarkMode/>
      <BtnLanguage/>
     <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
      {/* ... */}
      <h1>{t("name")}</h1>
      <h1>{t("tasks.task1")}</h1><h1>{t("tasks.task2")}</h1><h1>{t("tasks.task3")}</h1>
    </div>
    </>
  )
}

export default App
