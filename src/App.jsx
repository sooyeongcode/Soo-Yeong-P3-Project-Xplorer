import './App.css';
import bookData from './books.json';
import Book from './components/Book';

const App = () => {

  return (
    <div className='app'>
      <h1>Book List</h1>
      <main id='site-content'>
        <div className='bookList'>
          {bookData.map((book, index) => (
          <Book key={index} book={book} />
      ))}
      </div>
      </main>
    </div>
  );
};

export default App;