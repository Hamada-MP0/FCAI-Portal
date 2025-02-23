import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
const BestCard = ({ title, image, author, lang , id , onRemove }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();
  const isInFavoritesPage = location.pathname === '/library/favourite';

  // Check if book is in favorites on component mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favourite")) || [];
    setIsFavorite(favorites.some(item => item.id === id));
  }, [id]);

  const handleFavorite = (e) => {
    e.preventDefault(); // Prevent event bubbling
    const favorites = JSON.parse(localStorage.getItem("favourite")) || [];
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(item => item.id !== id);
      localStorage.setItem("favourite", JSON.stringify(updatedFavorites));
      
      // If we're in the favorites page, trigger the removal animation
      if (isInFavoritesPage && onRemove) {
        onRemove(id);
      }
    } else {
      // Add to favorites
      const newFavorite = { id, title, image, author, lang };
      localStorage.setItem("favourite", JSON.stringify([...favorites, newFavorite]));
    }
    
    setIsFavorite(!isFavorite);
  };

  return (
    <div
     
      data-aos="flip-left"
      className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden transform dark:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative ${
        isInFavoritesPage && !isFavorite ? 'animate-fadeOut' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-72">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Content Container */}
      <div className="p-6 dark:bg-gray-800">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white line-clamp-1">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          By {author}
        </p>
        
        {/* Actions Container */}
        <div className="flex items-center justify-between">
          <Link 
            to={`/library/showCard/${id}`} // Update from /show_product/${id}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
          >
            Read More
          </Link>
          
          <button
            onClick={handleFavorite}
            className="group-hover:opacity-100 transition-all duration-300"
          >
            <i className={`bx ${isFavorite ? 'bxs-heart text-red-500' : 'bx-heart'} text-2xl transform transition-transform hover:scale-125 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></i>
          </button>
        </div>
      </div>

      {/* Category Tag */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full backdrop-blur-sm">
          {lang}
        </span>
      </div>
    </div>
  )
}

export default BestCard