

import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './pages/about/About';
import ContactUs from './pages/ContactUS/ContactUs';
import Report from './pages/Report/Report';
import Library  from './pages/Liberary/Library';
import BestBooks  from './pages/Liberary/BestBooks';
import AllBooks  from './pages/Liberary/AllBooks';
import Favourite  from './pages/Liberary/Favourite';
import ShowCard from './component/CardsLibrary/ShowCard';
import Sigin from './pages/sigin&Login/Sigin';
import Login from './pages/sigin&Login/Login';



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
<HashRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact_us' element={<ContactUs />} />
    <Route path='/reports' element={<Report />} />
    <Route path='/library' element={<Library />}>
      <Route index element={<BestBooks />} />
      <Route path='best_books' element={<BestBooks />} />
      <Route path='all_books' element={<AllBooks />} />
      <Route path='favourite' element={<Favourite />} />
    </Route>
    <Route path='/library/showCard/:id' element={<ShowCard />} />
    <Route path='/Sigin' element={<Sigin />} />
    <Route path='/Login' element={<Login />} />
  </Routes>
  <Footer />
</HashRouter>

    </>
  )
}

export default App

