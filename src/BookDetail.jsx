import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BookDetail.scss';  

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState();

    const loadData = async () => {
        try {
            const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=' + id);
            const data = await response.json();

            setBook(data);
        } catch (error) {
            console.log('Loading data is not successful', error);
        }
    }

    useEffect(() => {loadData()}, []);

    return (
        <div className="book-detail"> 
            <h1>Book Detail</h1>

            {
                book ? 
                <div className="book">
                    <h2 className="book-title">{book.title}</h2>
                    <p className="book-price">Price is: {book.price} EUR</p>
                </div>
                : <>
                    <div>Loading</div>
                </>
            }
        </div>
    )
}
