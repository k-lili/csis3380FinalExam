import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import apiLink from './config'

const BookCard = (props) => {
  return (
    <div className="card-container">
        <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div class="desc">
            <h2><a href="/show-book/123id">{props.title}</a></h2>
            <h3>{props.author}</h3>
            <p>{props.desc}</p>
          </div>
          <button class="deleteBtn" onClick={() => props.deleteBook(props.keyt)}>X</button>
    </div>
  );
};

function ViewBooks() {

  const [bookList, setBookList] = useState([]);

    useEffect(() => {
        axios 
            .get(`${apiLink}/`)
            .then((response) => {
                setBookList(response.data)
                console.log(response.data);
            }) 
            .catch((error) => {
                console.log(error)
            }) 
    }, [])

    const deleteBook = (id) => {
        console.log(id)
    
        axios
            .delete(`${apiLink}/${id}`)
            .then((response) => {
                console.log(response.data);
            });
    
        setBookList(bookList.filter((el) => el._id !== id));
    };

  return (
          <div class="BookList">
            <div class="col-md-12">
            <br />
            <h2 class="display-4 text-center">Books List</h2>
            </div>
            <div class="col-md-11">
        
                <Link to="/create-book" className="nav-link" class="btn btn-info float-right">
                    + Add New Book
                </Link>
                <br /><br />
                <hr />
            </div>
            
            <div class="list">                
                {bookList.map((book) => {
                    return <BookCard
                        keyt={book._id}
                        title={book.title}
                        author={book.author}
                        desc={book.description}
                        deleteBook={deleteBook}
                    />
                })}
            
            </div>
      </div>
    
  );
}

export default ViewBooks;
