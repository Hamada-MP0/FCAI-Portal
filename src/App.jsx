

import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './pages/about/About';
import ContactUs from './pages/ContactUS/ContactUs';
import Report from './pages/Report/Report';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // مدة الحركة بالمللي ثانية
      easing: "ease", // نوع الحركة
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
        <Route path='/about' element={<About/>}/>
        <Route path='/contact_us' element={<ContactUs/>}/>
        <Route path='/reports' element={<Report/>}/>
        <Route path='/library' element={<h1>library</h1>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

