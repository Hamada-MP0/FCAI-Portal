import img from '../../../assets/imageAbout/Screenshot (26).png'
import img2 from '../../../assets/imageAbout/DrShereen.jpg'
import img3 from '../../../assets/imageAbout/Screenshot (25).png'

const deans = [
  {
    title: "Student Affairs",
    name: "Prof. Mohamed Helmy Abdelaziz Khafagy",
    appointmentDate: "2021",
    specialization: "Computer Science",
    email: "mhk00@fayoum.edu.eg",
    image: img,
    links: ["Biography", "Dean's Office", "Organizational Structure", "Student Affairs"],
  },
  {
    title: "Postgraduate Studies and Research",
    name: "Prof. Sherine Ali Mohamed Tali",
    appointmentDate: "11/12/2022",
    specialization: "Computer Science",
    email: "sat00@fayoum.edu.eg",
    image: img2,
    links: ["Biography", "Dean's Office", "Organizational Structure", "Graduate Studies"],
  },
  {
    title: "Community Service and Environmental Development",
    name: "Dr. Masoud Ismail Masoud",
    appointmentDate: "23/2/2024",
    specialization: "Computer Science",
    email: "mem00@fayoum.edu.eg",
    image: img3,
    links: ["Biography", "Dean's Office", "Organizational Structure", "Community Service"],
  },
];

const CollegeAgents = () => {
  return (
    <div className="md:max-w-6xl w-{100%} mx-auto p-4 overflow-y-auto max-h-screen">

      <div className="md:grid md:grid-cols-3 flex flex-wrap overflow-x-auto text-center text-lg font-[600] bg-gray-100 p-3 rounded-md">
        {deans.map((title, index) => (
          <div key={index} className="border border-gray-300 p-2">
            {title.title}
          </div>
        ))}
      </div>


      <div className="xl:grid xl:grid-cols-1 xl:grid-cols-3 gap-6 mt-4">
        {deans.map((dean, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">

            <img src={dean.image} alt={dean.name} className="w-52 h-52 mx-auto rounded-full border-4 border-gray-300" />

            <h2 className="text-xl font-semibold text-gray-800 mt-3">{dean.name}</h2>
            <p className="text-gray-600">Appointment Date: {dean.appointmentDate}</p>
            <p className="text-gray-600">Specialization: {dean.specialization}</p>

            <a href={`mailto:${dean.email}`} className="block text-red-600 hover:underline mt-2">
              {dean.email}
            </a>


            <div className="mt-4 space-y-5">
              {dean.links.map((link, idx) => (
                <a key={idx} href="#" className="block text-gray-800 hover:text-red-600 font-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeAgents;
