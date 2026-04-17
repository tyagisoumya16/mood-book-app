import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSearch(text);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mb-6"
    >
      <div className="flex shadow-md rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search books..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-5 py-2 w-64 outline-none"
        />
        <button className="bg-blue-500 text-white px-6 hover:bg-blue-600">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;