
const AcademicDegrees = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center">
        <h1 className="mx-4 my-14 font-semibold">The success rate in each course, as well as when transferring to the next class, and the cumulative total are calculated according to the following:</h1>
  <table className="border border-green-500 w-3/4 text-center">
    <thead>
      <tr className="bg-gray-200 border border-green-500">
        <th className="p-3 border border-green-500">Grade Range</th>
        <th className="p-3 border border-green-500">Evaluation</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border border-green-500">
        <td className="p-3 border border-green-500">85% or more</td>
        <td className="p-3 border border-green-500">Excellent</td>
      </tr>
      <tr className="border border-green-500">
        <td className="p-3 border border-green-500">75% to less than 85%</td>
        <td className="p-3 border border-green-500">Very Good</td>
      </tr>
      <tr className="border border-green-500">
        <td className="p-3 border border-green-500">65% to less than 75%</td>
        <td className="p-3 border border-green-500">Good</td>
      </tr>
      <tr className="border border-green-500">
        <td className="p-3 border border-green-500">60% to less than 65%</td>
        <td className="p-3 border border-green-500">Pass</td>
      </tr>
    </tbody>
  </table>

  <p className="mt-4 font-semibold">A student fails if they receive a grade of:</p>

  <table className="border border-green-500 w-3/4 text-center mt-2">
    <tbody>
      <tr className="bg-gray-200 border border-green-500">
        <td className="p-3 border border-green-500">30% to less than 50%</td>
        <td className="p-3 border border-green-500">Weak</td>
      </tr>
      <tr className="border border-green-500">
        <td className="p-3 border border-green-500">Less than 30%</td>
        <td className="p-3 border border-green-500">Very Weak</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default AcademicDegrees
