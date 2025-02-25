import { NavLink , Link } from 'react-router';
import logo from '../../assets/logo.png'
import 'boxicons'
import { useState } from 'react'
import DarkMode from '../dark&light/DarkMode';
import BtnLanguage from '../../component/Button/BtnLanguage'    

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    return (
        <section className='fixed top-0 z-[500] bg-white/90 backdrop-blur-lg shadow-2xl w-full dark:bg-black/60'>
            <nav className="font-inter w-full shadow-xl">
                <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                    <div className="flex flex-col py-4 lg:flex-row lg:items-center lg:justify-between">
                        {/* Logo and Mobile Menu Button */}
                        <div className="flex items-center justify-between">
                            <Link  data-aos="zoom-in-up"
                                    data-aos-delay={ 600 } to="/" className="flex items-center space-x-3">
                                <img src={logo} alt="logo" className='w-16 sm:w-20' />
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 hover:bg-amber-100 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl dark:text-white dark:hover:text-black`}></i>
                            </button>
                        </div>

                        {/* Navigation Links and Actions */}
                        <div 
                            className={`${
                                isMenuOpen ? 'flex' : 'hidden'
                            } lg:flex flex-col lg:flex-row lg:items-center lg:justify-between flex-1 lg:ml-12`}
                        >
                            {/* Main Navigation */}
                            <div  data-aos="fade-down"
                                    data-aos-delay={ 900 }  className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
                                <NavLink  data-aos="fade-down"
                                    data-aos-delay={ 300 }  to="/" className="px-4 py-2 rounded-lg hover:bg-red-800 dark:text-white transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                   <span  >Home</span>
                                </NavLink>
                                <NavLink  data-aos="fade-down"
                                    data-aos-delay={ 600 } to="/about" className="px-4 py-2 rounded-lg hover:bg-red-800 dark:text-white transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    About
                                </NavLink>
                                <NavLink  data-aos="fade-down"
                                    data-aos-delay={ 800 } to="/library" className="px-4 py-2 rounded-lg hover:bg-red-800 dark:text-white transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    Library
                                </NavLink>
                                <NavLink  data-aos="fade-down"
                                    data-aos-delay={ 1000 } to="/reports" className="px-4 py-2 rounded-lg hover:bg-red-800 dark:text-white transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    Report
                                </NavLink>
                                <NavLink  data-aos="fade-down"
                                    data-aos-delay={ 1200 } to="/contact_us" className="px-4 py-2 rounded-lg hover:bg-red-800 dark:text-white transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    Contact Us
                                </NavLink>
                            </div>

                            {/* Actions (Sign Up, Login, Cart) */}
                            <div 
                                    data-aos="zoom-in-down"
                                    data-aos-delay={ 200 } 
                                    className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
                                <NavLink    to="/Sigin" className="w-full lg:w-auto px-6 py-2.5 text-center rounded-lg dark:text-white hover:bg-gray-800/50 transition-colors">
                                    Sign Up
                                </NavLink>
                                <NavLink   to="/Login" className="w-full lg:w-auto px-6 py-2.5 text-center rounded-lg bg-black text-white hover:bg-gray-800/50 transition-colors">
                                    Login
                                </NavLink>
                                <div className='flex gap-2 items-center justify-center'>
                                <DarkMode/>
                                <BtnLanguage/>
                                
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}


export default Header;
