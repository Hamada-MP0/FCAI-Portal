import { useContext, useState } from "react";
import { LibraryContext } from "./Library";
import BestCard from "../../component/CardsLibrary/BestCard";

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const booksData = useContext(LibraryContext);

  // Fix typo in target and toLowerCase
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Add null check for booksData.results and fix toLowerCase
  const filteredBooks = booksData?.results?.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading state check
  if (!booksData || !booksData.results) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-bold mb-6 dark:text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 italic dark:text-white">All Books &gt;</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for books..."
          className="col-span-full p-2 border border-gray-300 rounded-md mb-4"
          onChange={handleInputChange}
        />
        {/* Render books data */}
        {filteredBooks?.length > 0 ? (
          filteredBooks.map((book) => (
            <BestCard 
              key={book.id}
              title={book.title} 
              image={book.formats["image/jpeg"]} 
              author={book.authors[0]?.name || "Unknown"} 
              lang={book.languages[0]}
              id={book.id}
            />
          ))
        ) : (
          <div className="col-span-full text-center">
            <h1 className="dark:text-white text-xl">No Books Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;  