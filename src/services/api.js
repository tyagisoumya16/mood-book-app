export const fetchBooks = async (query) => {
  const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return data.docs.slice(0, 20);
};