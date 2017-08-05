import React from 'react';
import { Component, PropTypes } from 'react';
import './App.css';
import Book from './Book';



class ContainerBook extends Component {
    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book author="Harper Lee"
                                  title="To Kill a Mockingbird"
                                  cover='url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api%22")'
                            />
                        </li>
                        <li>
                            <Book author="Orson Scott Card"
                                  title="Ender's Game"
                                  cover='url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
                            />
                        </li>
                    </ol>
                </div>
            </div>

        );
    }
}

ContainerBook.PropTypes = {
    name: PropTypes.string.isRequired,
    elements: PropTypes.object.isRequired,
}


export default ContainerBook;