import React from 'react';
import { Component, PropTypes } from 'react';
import './App.css';
//import * as BooksAPI from './BooksAPI'


class Book extends Component {

    state =  {
        selectValue: this.props.shelf
    };

    onChange = (event) => {
        this.setState({selectValue: event.target.value});
    }


    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.selectValue}
                                onChange={this.onChange}
                                onClick={this.props.onChangeStatusBook(this.props.book, this.state.selectValue)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}


Book.PropTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    onChangeStatusBook: PropTypes.func.isRequired,
}

export default Book;