
import React from 'react';
import { Component, PropTypes } from 'react';
import './App.css';
//import './images/*.*';

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.cover}}></div>
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
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        );
    }
}

Book.PropTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

Book.props = {
    title: ' ',
    cover: ' ',
    author: ' ',
}

export default Book;