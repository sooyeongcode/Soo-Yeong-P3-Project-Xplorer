import React, { useState } from 'react';
import './App.css';
import bookData from './books.json';
import Book from './components/Book';
import Header from './components/Header';
import Footer from './components/Footer';
import ShowMoreButton from './components/ShowMoreButton';

const App = () => {
  const [visibleBooks, setVisibleBooks] = useState(10);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const showMoreBooks = () => {
    setVisibleBooks(bookData.length);
    setShowMoreButton(false);
  };

  return (
    <div className='app'>
      <Header />
      <main id='site-content'>
        <div className='bookList'>
          {bookData.slice(0, visibleBooks).map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
        {showMoreButton && (
          <div className='ShowMoreButton'>
            <ShowMoreButton onClick={showMoreBooks} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;