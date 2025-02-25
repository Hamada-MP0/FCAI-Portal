

const Card3 = () => {
  return (
    <div className="pb-2 border-b-2 shadow-2xl  border-black/50 rounded-b-[100px]">
      <section className="pt-20 dark:bg-black/40 pb-10 lg:pt-[120px] rounded-t-[50px] rounded-b-[80px] lg:pb-20 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4"> 
              <div
                data-aos="zoom-in-up"
                data-aos-delay="1200"
                className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20"
              >
                <span
                  data-aos="zoom-in-down"
                  data-aos-delay="100"
                  className="block mb-2 text-lg font-semibold text-primary"
                >
                  College of Computer Science and Artificial Intelligence
                </span>
                <h2
                  data-aos="fade-down"
                  data-aos-delay="900"
                  className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white"
                >
                  The most important sections
                </h2>
                <p className="text-base dark:text-white/50 text-body-color dark:text-dark-6">
                  There are many sections and fields in the computing path, and the most important of these fields are:
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in-down"
            data-aos-delay="200"
            className="flex  flex-wrap -mx-4 gap-5 rounded-[50px]"
          >

            <div className="w-full px-4 md:w-1/2 lg:w-[30%] border shadow-2xl  border-black/20 rounded-[50px]">
              <div data-aos="fade-right " className="w-full  mb-10">
                <div className="mb-8 overflow-hidden shadow-2xl border  border-black/20 rounded-[50px]">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-delay="800"
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                    alt="Information Systems"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div data-aos="fade-right " className="px-5">
                  <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                    Dec 22, 2025
                  </span>
                  <h3>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Information Systems (IS)
                    </a>
                  </h3>
                  <p className=" dark:text-white/50 text-base text-body-color dark:text-dark-6" data-aos="fade-right" data-aos-delay="1200">
                    Focuses on designing, developing, and managing systems that collect, process, and analyze data to support business and organizational decision-making.
                  </p>
                </div>
              </div>
            </div>

 
            <div data-aos="fade-right " className="w-full shadow-2xl px-4 md:w-1/2  lg:w-[30%] border border-black/20 rounded-[50px]">
              <div className="w-full mb-10">
                <div className="mb-8 overflow-hidden shadow-2xl border border-black/20 rounded-[50px]">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-delay="1500"
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                    alt="Artificial Intelligence"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="px-5">
                  <span data-aos="fade-right" className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                    Mar 15, 2025
                  </span>
                  <h3>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="1200"
                      href="#"
                      className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Artificial Intelligence (AI)
                    </a>
                  </h3>
                  <p className="text-base  dark:text-white/50 text-body-color dark:text-dark-6" data-aos="fade-right" data-aos-delay="1200">
                    🤖 A branch of computer science that aims to develop systems capable of learning, reasoning, and making decisions similar to human intelligence, including deep learning and computer vision.
                  </p>
                </div>
              </div>
            </div>

            <div  data-aos="fade-right " className="w-full shadow-2xl px-4 md:w-1/2  lg:w-[30%] border border-black/20 rounded-[50px]">
              <div className="w-full mb-10">
                <div className="mb-8 overflow-hidden shadow-2xl border border-black/20 rounded-[50px]">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-delay="3000"
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                    alt="Computer Science"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="px-5">
                  <span data-aos="fade-right" className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                    Jan 05, 2025
                  </span>
                  <h3 data-aos="fade-down" data-aos-delay="600">
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Computer Science (CS)
                    </a>
                  </h3>
                  <p className="text-base dark:text-white/50 text-body-color dark:text-dark-6" data-aos="fade-right">
                    💻 Studies the fundamental principles and theories of computing, including algorithms, data structures, cybersecurity, software development, and networking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card3;
