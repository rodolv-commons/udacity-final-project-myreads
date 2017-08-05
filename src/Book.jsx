import React from 'react';
import { Component, PropTypes } from 'react';
import './App.css';

class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'read'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        alert('Your favorite book state is: ' + this.state.value);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.cover}}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={this.handleChange}>
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