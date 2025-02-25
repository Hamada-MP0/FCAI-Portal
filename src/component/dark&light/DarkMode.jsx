import {useState,useEffect} from "react";

import { Sun, Moon } from "lucide-react";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark"); 
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div  data-aos="fade-up"
    data-aos-delay={ 900 } className="relative">
<button
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  className="w-12 h-12 dark:text-white flex items-center justify-center bg-transparent border-none cursor-pointer transition-all duration-300"
>
  {theme === "light" ? <Sun size={25} /> : <Moon size={25} />}
</button>
    </div>
  );
};

export default DarkMode;
