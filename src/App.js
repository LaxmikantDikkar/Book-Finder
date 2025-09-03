import React, { useState } from "react";
import SearchBar from "../frontend/src/components/SearchBar";
import BookList from "../frontend/src/components/BookList";
import Favorites from "../frontend/src/components/Favorites";
import { searchBooks } from "../frontend/src/services/api";

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const { data } = await searchBooks(query);
    setBooks(data.docs);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
      <Favorites />
    </div>
  );
}

export default App;
