import { useState } from "react";
import { fetchBooks } from "./services/api";
import BookCard from "./components/BookCard";
import MoodSelector from "./components/MoodSelector";
import Loader from "./components/Loader";
import Error from "./components/Error";
import SearchBar from "./components/SearchBar";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetch = async (query) => {
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const data = await fetchBooks(query);
      setBooks(data);
    } catch (err) {
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
  <div className="min-h-screen px-4 py-8">

    {/* Header */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-semibold text-gray-900">
        📚 Read By Mood
      </h1>
      <p className="text-gray-500 mt-2">
        Find books that match how you feel
      </p>
    </div>

    {/* Search */}
    <SearchBar onSearch={handleFetch} />

    {/* Mood */}
    <MoodSelector onSelect={handleFetch} />

    {/* States */}
    {loading && <Loader />}
    {error && <Error message={error} />}

    {!loading && books.length === 0 && !error && (
      <p className="text-center text-gray-400 mt-6">
        Try selecting a mood or searching something ✨
      </p>
    )}

    {/* Books Grid */}
    <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  </div>
  );
}

export default App;