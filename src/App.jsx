import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BookList';  
function App() {

  const books = [
    {
      title: "Libro 1",
      cover: "/book1.avif"
    },
    {
      title: "Libro 2",
      cover: "/book2.avif"
    },
    {
      title: "Libro 3",
      cover: "/book3.avif"
    }
  ];

  return (
    <div className="App">
      <BookList books={books} /> {}
    </div>
  );
}

export default App;