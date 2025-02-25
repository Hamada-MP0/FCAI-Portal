import { useState, useEffect } from "react"
import BestCard from "../../component/CardsLibrary/BestCard"

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    loadFavourites();
  }, []);

  const loadFavourites = () => {
    const stored = JSON.parse(localStorage.getItem("favourite")) || [];
    setFavourites(stored);
  };

  const handleRemove = (id) => {
    setFavourites(prev => prev.filter(item => item.id !== id));
  };

  if (favourites.length === 0) {
    return (
      <div className=" py-12">
        <h1 className="text-3xl font-bold mb-6 italic dark:text-white">Favourites &gt;</h1>
        <p className="dark:text-gray-400 text-red-600 text-3xl my-4 text-center">No favorite books yet. Add some books to your favourites!</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 italic text-white">Favourites &gt;</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favourites.map((item) => (
          <BestCard 
            key={item.id} 
            {...item} 
            onRemove={handleRemove}
            data-aos="fade-down"
            
          />
        ))}
      </div>
    </div>
  );
};

export default Favourite;