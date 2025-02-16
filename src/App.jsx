import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
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
