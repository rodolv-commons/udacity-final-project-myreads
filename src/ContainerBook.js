import React from 'react';
import { Component, PropTypes } from 'react';
import './App.css';
//import Book from './Book';


class ContainerBook extends Component {
    render (){

    let booksToShow;
    let shelfName;

    switch(this.props.name) {
        case "Currently Reading":
            shelfName = 'currentlyReading'
            break
        case "Want to Read":
            shelfName = 'wantToRead'
            break
        case "Read":
            shelfName = 'read'
            break
    }

    booksToShow = this.props.books.filter(book => (book.shelf === shelfName))

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksToShow.map( book => (
                            <li key={book.id} >
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

ContainerBook.PropTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
}


export default ContainerBook;