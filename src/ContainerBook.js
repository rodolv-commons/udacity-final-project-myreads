import React from 'react';
import { Component, PropTypes } from 'react';
import './App.css';
import Book from "./Book";


class ContainerBook extends Component {

    onChangeStatusBook = () => {
        return this.props.onChangeStatusBook;
    }


    render (){

        let shelfName='';
        switch (this.props.name) {
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

        let booksToShow;
        booksToShow = this.props.books.filter(book => (book.shelf === shelfName))

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksToShow.map( book => (
                            <li key={book.id} >
                                <Book book={book}
                                      shelf={shelfName}
                                      onChangeStatusBook={this.onChangeStatusBook(book, shelfName)}
                                />
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
    onChangeStatusBook: PropTypes.func.isRequired,
}


export default ContainerBook;