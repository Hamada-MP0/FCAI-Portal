import { NavLink , Link } from 'react-router';
import logo from '../../assets/logo.png'
import 'boxicons'
import { useState } from 'react'
import DarkMode from '../dark&light/DarkMode';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    return (
        <section className='sticky top-0 z-50 bg-amber-50 w-full'>
            <nav className="font-inter w-full shadow-xl">
                <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                    <div className="flex flex-col py-4 lg:flex-row lg:items-center lg:justify-between">
                        {/* Logo and Mobile Menu Button */}
                        <div className="flex items-center justify-between">
                            <Link to="/" className="flex items-center space-x-3">
                                <img src={logo} alt="logo" className='w-16 sm:w-20' />
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 hover:bg-amber-100 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl `}></i>
                            </button>
                        </div>

                        {/* Navigation Links and Actions */}
                        <div 
                            className={`${
                                isMenuOpen ? 'flex' : 'hidden'
                            } lg:flex flex-col lg:flex-row lg:items-center lg:justify-between flex-1 lg:ml-12`}
                        >
                            {/* Main Navigation */}
                            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
                                <NavLink to="/" className="px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    Home
                                </NavLink>
                                <NavLink to="/about" className="px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    About
                                </NavLink>
                                <NavLink to="/library" className="px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    Library
                                </NavLink>
                                <NavLink to="/reports" className="px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    Report
                                </NavLink>
                                <NavLink to="/contact_us" className="px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                                    Contact Us
                                </NavLink>
                            </div>

                            {/* Actions (Sign Up, Login, Cart) */}
                            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
                                <NavLink to="/sign_up" className="w-full lg:w-auto px-6 py-2.5 text-center rounded-lg hover:bg-amber-100 transition-colors">
                                    Sign Up
                                </NavLink>
                                <Link to="/login" className="w-full lg:w-auto px-6 py-2.5 text-center rounded-lg bg-black text-white hover:bg-gray-800 transition-colors">
                                    Login
                                </Link>
                                <DarkMode/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}


export default Header;
