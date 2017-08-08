import React from 'react';
import { Component, PropTypes } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'


class Book extends Component {

    state = {value: this.props.shelf};

    //this.handleChange = this.handleChange.bind(this);


    onChange = (event) => {
        this.setState({value: event.target.value});
        alert('Your favorite book state is: ' + this.state.value);
        //BooksAPI.update(BooksAPI.get(this.props.id),this.state.value)
        console.log(BooksAPI.get(this.props.id));
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.cover}}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={this.onChange}>
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
    shelf: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Book;