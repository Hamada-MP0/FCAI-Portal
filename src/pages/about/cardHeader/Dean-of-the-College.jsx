
import img from '../../../assets/imageAbout/Screenshot (26).png'
const DeanOftheCollege = () => {
  return (
    <div className="  bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
{/* image */}
      <div className="flex justify-center mt-4">
        <img
          src={img} 
          alt="Dean"
          className="w-56 h-56 rounded-full border-4 border-gray-300"
        />
      </div>

      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Prof. Mohamed Helmy Abdelaziz Khafagy
        </h2>
        <p className="text-gray-600 mt-2">Dean of the Faculty (Acting)</p>

        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-semibold text-[20px]">Appointment Date:</span> 06/10/2021
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-[20px]">Specialization:</span> Computer Science
          </p>
        </div>

        <a
          href="mailto:mhk00@fayoum.edu.eg"
          className="block text-red-600 hover:underline mt-3"
        >
          mhk00@fayoum.edu.eg
        </a>


        <div className="mt-5 space-y-2">
          <a href="#" className="block text-gray-800 hover:text-red-600 font-semibold">
            Biography
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-600 font-semibold">
            Dean is Message
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-600 font-semibold">
            Dean is Office
          </a>
          <a href="#" className="block text-gray-800 hover:text-red-600 font-semibold">
            Former Deans
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeanOftheCollege;
