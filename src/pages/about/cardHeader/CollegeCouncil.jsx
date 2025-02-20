import { FaCheckCircle } from "react-icons/fa";

const Specialunits = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 p-10 rounded-lg shadow-md  ">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 border-b pb-2">
      Date of creation: <span className="text-red-800">30 - 5 - 2007</span>
      </h2>
      <p className="text-xl text-gray-700 mb-4">
      The center aims to serve the community and the surrounding environment by employing the available and diverse capabilities of the college. The center consists of two units:</p>
      
      <ul className="space-y-10">
        <li className="flex items-center text-gray-700 text-xl">
          <FaCheckCircle className="text-green-600 mr-2" />Services and Consulting Unit.
        </li>
        <li className="flex items-center text-gray-700 text-xl">
          <FaCheckCircle className="text-green-600 mr-2" /> Training and Skills Development Unit.
        </li>
      </ul>
      
      <h3 className="text-3xl font-bold text-gray-800 mt-6 mb-2">
      The units in the Centre’s field of work address the following objectives:</h3>
      <ul className="list-disc text-gray-700 pl-6 space-y-3">
      <li>Providing consultations and conducting field research to serve the community and develop the environment.</li>
<li>Developing skills and creative energies for the benefit of the college through seminars, conferences, workshops and training courses.</li>
<li>Exchanging experiences and projects with relevant bodies and authorities and marketing experiences, courses and productive projects.</li>
      </ul>
    </div>
  );
};



  export default Specialunits
  