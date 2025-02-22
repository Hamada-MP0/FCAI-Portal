
const Estimates = () => {
  return (
    <div>
    
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-red-600 border-b-2 border-red-600 pb-2">Academic Degrees</h1>
      
      <p className="mt-4 text-lg font-semibold">The university grants, upon the request of the faculty, the following academic degrees:</p>
      
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li><span className="font-bold">Bachelor is Degree</span> in one of the following specializations:</li>
        <ul className="list-disc list-inside ml-6">
          <li>Computer Science</li>
          <li>Information Systems</li>
        </ul>
      </ul>
      
      <p className="mt-4 text-lg font-semibold">
        <span className="text-red-600">Study Duration:</span> Four years to obtain a Bachelor's degree.
      </p>
      
      <p className="mt-6 text-lg font-semibold">The Faculty of Computers and Information at Fayoum University grants, upon the request of the faculty council, a Postgraduate Diploma in one of the following specializations:</p>
      
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>
          <span className="font-bold">Computer Science (Professional)</span> in one of the following fields:
          <ul className="list-disc list-inside ml-6">
            <li>Computer Networks</li>
            <li>Web Programming</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Information Science (Academic)</span> in:
          <ul className="list-disc list-inside ml-6">
            <li>Big Data Processing</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Information Systems (Professional)</span> in:
          <ul className="list-disc list-inside ml-6">
            <li>Database Management</li>
          </ul>
        </li>
      </ul>
    </div>
  );

    </div>
  )
}

export default Estimates
