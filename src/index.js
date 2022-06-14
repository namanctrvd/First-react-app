import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS & componants
import  './index.css';
import {books} from './books';
import Book from './Book';

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        const { img, name, author, prop, price } = book
         return <Book key = {book.id} {...book}></Book>
      })}
    </section>
  )
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<BookList tab="home" />);