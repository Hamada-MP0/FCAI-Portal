import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white dark:bg-blue-800 pt-16 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Contact Section */}
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block max-w-[160px]">
                <div className="flex items-center space-x-3">
                  <img src={logo} alt="logo" className="w-16 h-16" />
                  <span className="text-xl md:text-2xl font-bold text-black dark:text-white">FCAI Fayoum</span>
                </div>
              </Link>
              <p className="mb-7 text-base text-body-color dark:text-gray-300">
                Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.
              </p>
              <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                <span className="mr-3 text-primary">
                  
                  <i className='bx bx-phone text-lg' ></i>{/* Phone icon SVG path */}
                  
                </span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>

          {/* Resource Links - Mobile Responsive */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-lg font-semibold text-dark dark:text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                <NavLink link="/#" label="SaaS Development" />
                <NavLink link="/#" label="Our Products" />
                <NavLink link="/#" label="User Flow" />
                <NavLink link="/#" label="User Strategy" />
              </ul>
            </div>
          </div>

          {/* Company Links - Mobile Responsive */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-lg font-semibold text-dark dark:text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <NavLink link="/#" label="About FCAI" />
                <NavLink link="/#" label="Contact & Support" />
                <NavLink link="/#" label="Success History" />
                <NavLink link="/#" label="Setting & Privacy" />
              </ul>
            </div>
          </div>

          {/* Quick Links - Mobile Responsive */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-lg font-semibold text-dark dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <NavLink link="/#" label="Premium Support" />
                <NavLink link="/#" label="Our Services" />
                <NavLink link="/#" label="Know Our Team" />
                <NavLink link="/#" label="Download App" />
              </ul>
            </div>
          </div>

          {/* Social Media Section - Mobile Responsive */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="text-lg font-semibold text-dark dark:text-white mb-6">Follow Us On</h4>
              <div className="flex flex-wrap items-center mb-6 -mx-2">
                <SocialLink href="/#" icon={<i className='bx bxl-facebook-circle'></i>} />
                <SocialLink href="/#" icon={<i className='bx bxl-twitter' ></i>} />
                <SocialLink href="/#" icon={<i className='bx bxl-youtube' ></i>} />
                <SocialLink href="/#" icon={<i className='bx bxl-linkedin-square' ></i>} />
              </div>
              <p className="text-base text-body-color dark:text-gray-300">
                &copy; {new Date().getFullYear()} FCAI Fayoum
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Link Component
// eslint-disable-next-line react/prop-types
const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="mx-2 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-dark hover:border-primary hover:bg-primary hover:text-blue-700 dark:border-gray-600 dark:text-white dark:hover:text-green-600 dark:hover:border-primary"
    >
      {icon}{/* Add your social media icons here */}
    </a>
  );
};

// Navigation Link Component
// eslint-disable-next-line react/prop-types
const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base text-body-color hover:text-primary dark:text-gray-300 dark:hover:text-white"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
