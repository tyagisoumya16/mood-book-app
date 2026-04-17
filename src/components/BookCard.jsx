const BookCard = ({ book }) => {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1">

      <img
        src={cover}
        alt={book.title}
        className="w-full h-52 object-cover rounded-lg"
      />

      <div className="mt-3">
        <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
          {book.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {book.author_name?.[0] || "Unknown Author"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;