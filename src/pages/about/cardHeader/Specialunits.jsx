import { Calendar, CheckCircle, Briefcase, Users } from "lucide-react";
const Specialunits = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 bg-gray-100 rounded-[30px] shadow-md">
   
      <h2 className="lg:text-5xl text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Calendar className="w-7 h-7 text-red-600" />
        Establishment Date: 30 - 5 - 2007
      </h2>

      <p className="text-2xl text-gray-700 mt-10">
        The center aims to serve the community and the surrounding environment by utilizing 
        the available capabilities and diversity within the faculty. The center consists of two units:
      </p>

      <ul className="list-disc list-inside mt-8 text-gray-700">
        <li className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-green-600" />
          <strong>Service and Consultation Unit</strong>
        </li>
        <li className="flex items-center gap-2">
          <Users className="w-5 h-5 text-green-600" />
          <strong>Training and Skills Development Unit</strong>
        </li>
      </ul>

  <h3 className="text-4xl font-[500] text-gray-800 mt-12 flex items-center gap-2">
        <CheckCircle className="w-6 h-6 text-red-600" />
        Objectives:
      </h3>
      <ul className="list-disc list-inside mt-6 text-gray-700 space-y-5">
        <li>Providing consultations and conducting field studies with practical applications benefiting the community and environmental development.</li>
        <li>Enhancing skills and creative capabilities through seminars, conferences, workshops, and training courses.</li>
        <li>Exchanging expertise with relevant entities and marketing university expertise, programs, training courses, and production projects.</li>
        <li>Offering scientific and environmental consultation services.</li>
      </ul>
    </div>
  );
}

export default Specialunits
