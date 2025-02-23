import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const ShowCard = () => {
   const [book, setBook] = useState(null)
   const [loading, setLoading] = useState(true)
   const { id } = useParams()
   
   useEffect(() => {
     const fetchBook = async () => {
       try {
         const response = await axios.get(`https://gutendex.com/books/?ids=${id}`)
         if (response.data.results && response.data.results.length > 0) {
           setBook(response.data.results[0])
         }
         setLoading(false)
       } catch (error) {
         console.error("Error fetching book:", error)
         setLoading(false)
       }
     }

     fetchBook()
   }, [id])

   if (loading || !book) {
      return (
          <div className="container mx-auto p-8  text-center dark:bg-gray-900 min-h-screen">
              <div className="text-2xl p-8 dark:text-white">Loading...</div>
              <Link 
                  to="/library"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                  <i className='bx bx-left-arrow-alt text-xl'></i>
                  Return to Library
              </Link>
          </div>
      );
   }

   return (
    <div className="container mx-auto px-4 py-8 min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Link 
          to="/library" 
          className="inline-flex self-start items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i className='bx bx-left-arrow-alt text-xl'></i>
          Back to Library
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8 mt-8"> 
          {/* Image Container */}
          <div data-aos="fade-right" className="md:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-4 transition-colors duration-300">
              <img 
                src={book.formats["image/jpeg"]} 
                alt={book.title} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          {/* Content Container */}
          <div data-aos="fade-left" className="md:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl transition-colors duration-300">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                {book.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                By {book.authors[0]?.name || "Unknown Author"}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Language
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-2xl">
                      {book.languages[0].toUpperCase()}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                       Readers Count
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-2xl">
                      {book.download_count.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Summary
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {book.summaries || 'No summary available'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
   )
}

export default ShowCard