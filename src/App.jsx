

import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './component/Header/Header';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // مدة الحركة بالمللي ثانية
      easing: "ease-in-out", // نوع الحركة
      once: false, // تشغيل الحركة مرة واحدة فقط  

      mirror: true, // ✅ يسمح للحركة بالعمل عند الصعود للأعلى
      offset: 50,
    });
  }, []);

  return (
    <>
 <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/contact_us' element={<h1>Contact</h1>}/>
        <Route path='/library' element={<h1>library</h1>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

