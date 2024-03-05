import { useEffect, useState, useContext } from "react";
import "./BookList.scss";
import CurrentyContext from "./CurrencyContext";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const { currency } = useContext(CurrentyContext);
  const [exchangeRate, setExchangeRate] = useState(1);

  const loadExchangeRate = async (currency) => {
    try {
      const response = await fetch(
        `https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=${currency}`
      );
      const data = await response.json();
      setExchangeRate(data.rate);
    } catch (error) {
      console.error("Not successful", error);
    }
  };

  const loadData = async () => {
    try {
      const response = await fetch(
        `https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=${page}&currency=${currency}&exchangeRate=${exchangeRate}`
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Not successful", error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage((prevPage) => Math.max(prevPage + newPage, 1));
  };

  useEffect(() => {
    loadData();
  }, [page, currency, exchangeRate]);

  useEffect(() => {
    loadExchangeRate(currency);
  }, [currency]);

  return (
    <div className="book-list">
      <h1>BookList</h1>
      <div className="pagination-buttons">
        <button onClick={() => handlePageChange(-1)}>Previous Page</button>
        <button onClick={() => handlePageChange(1)}>Next Page</button>
      </div>

      {books.map((book) => (
        <div key={book.id} className="book">
          <h2>{book.title}</h2>
          {book.authors &&
          Array.isArray(book.authors) &&
          book.authors.length > 0 ? (
            <>
              <p>{book.authors[0].name}</p>
            </>
          ) : (
            <p>No author information available</p>
          )}
        </div>
      ))}
    </div>
  );
}
