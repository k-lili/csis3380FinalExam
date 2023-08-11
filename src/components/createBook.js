import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import apiLink from './config'

function CreateBook() {

    const [title, setOnChangeTitle] = useState(``);
    const [author, setOnChangeAuthor] = useState(``);
    const [desc, setOnChangeDesc] = useState(``);
    

    const onSubmit = (e) => {
        e.preventDefault();
        const bookvar = { title: title, author: author, description: desc };
        console.log(bookvar);
    
        axios
          .post(`${apiLink}/`, bookvar)
          .then((res) => {
            window.location = '/';
          });
    };


    return (
        <div class="CreateBook">
        <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
            <br />
                <Link to="/" class="btn btn-info float-left">
                    Show BooK List
                </Link>
            </div>
            <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>

            <form onSubmit={onSubmit}>
                <div class="form-group">
                <input
                    type="text"
                    placeholder="Title of the Book"
                    name="title"
                    className="form-control"
                    value={title}
                    spellcheck="false"
                    // data-ms-editor="true"
                    onChange={(e) => setOnChangeTitle(e.target.value)}
                />
                </div>

                <div class="form-group">
                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="form-control"
                    value={author}
                    spellcheck="false"
                    data-ms-editor="true"
                    onChange={(e) => setOnChangeAuthor(e.target.value)}
                />
                </div>

                <div class="form-group">
                <input
                    type="text"
                    placeholder="Describe this book"
                    name="description"
                    className="form-control"
                    value={desc}
                    spellcheck="false"
                    data-ms-editor="true"
                    onChange={(e) => setOnChangeDesc(e.target.value)}
                />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
            </div>
        </div>
        </div>
    </div>
        
    );
}

export default CreateBook;
