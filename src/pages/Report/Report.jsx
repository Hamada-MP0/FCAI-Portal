import { useState } from "react";

const Report = () => {
  // Add state for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    const emptyFields = Object.entries(formData).filter(([ value]) => !value.trim());
    
    if (emptyFields.length > 0) {
      alert('Please fill in all fields before submitting');
      return;
    }

    // If all fields are filled, show success message
    alert('Your report has been submitted successfully!');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="mt-28">
      <div data-aos="fade-right" className="relative dark:bg-gray-900 flex flex-col top-0 justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="bg-white relative top-0 h-full mx-auto w-full">
          <div className="grid dark:bg-gray-900 gap-2  md:grid-cols-6 h-full">
            <div className="bg-blue-900 dark:bg-[#1E2935] p-10 col-span-2">
              <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Info Contact</h2>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Location Address
                <span className="font-normal text-xs text-blue-300 block">fayoum university - st.tawfiq elhakeem - fayoum - egypt</span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Phone Number
                <span className="font-normal text-xs text-blue-300 block">084</span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Email Address
                <span className="font-normal text-xs text-blue-300 block">example@example.com</span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Web Address
                <span className="font-normal text-xs text-blue-300 block">FCAI.com</span>
              </p>

            </div>
            <div className="bg-blue-200 dark:bg-[#0D141F] p-14 col-span-4">
              <h2 className="mb-14 font-bold text-4xl text-blue-900 dark:text-white before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Share your Report</h2>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="py-4 bg-white dark:bg-[#28333F] dark:text-white rounded-full px-6 placeholder:text-xs"  
                    placeholder="first name" 
                  />
                </div>
                <div className="flex flex-col">
                  <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="py-4 bg-white dark:bg-[#28333F] dark:text-white rounded-full px-6 placeholder:text-xs"  
                    placeholder="last name" 
                  />
                </div>
              </div>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-4 bg-white dark:bg-[#28333F] dark:text-white rounded-full px-6 placeholder:text-xs"  
                    placeholder="Email Address" 
                  />
                </div>
                <div className="flex flex-col">
                  <input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="py-4 bg-white dark:bg-[#28333F] dark:text-white rounded-full px-6 placeholder:text-xs"  
                    placeholder="Subject" 
                  />
                </div>
              </div>
              <div className="mb-6">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl dark:bg-[#28333F] dark:text-white placeholder:text-xs px-6 py-4" 
                  placeholder="please write your report here" 
                  rows="8"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={handleSubmit} 
                  className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section data-aos="fade-left" className="relative z-20 overflow-hidden flex-wrap bg-white pb-12 pt-20 dark:bg-[#111928] lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-xl font-semibold text-blue-800">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-[#7C8490] dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    </div>
  )
}

export default Report

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div data-aos="flip-up" className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-[#1E2935] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-[#F4F5FE] text-primary dark:bg-[#293440]">
          <svg
            className={`fill-[#3758F9] stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-[#5D6773]">
          {text}
        </p>
      </div>
    </div>
  );
};

