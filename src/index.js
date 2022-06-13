import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import  './index.css';
const books = [
  { 
    id: "1",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
    name: "The Psychology of Money",
    author: "Morgan Housel",
    prop: "Paperback",
    price: "Rs. 259.00"
  },
  {
    id: "2",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg",
    name: "The power of your subconscious Mind",
    author: "Joseph Murphy",
    prop: "Paperback",
    price: "Rs. 115.00"
  },
  {
    id: "3",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61boBtfrz5L._AC_UL604_SR604,400_.jpg",
    name: "Ret Samadhi - Hindi",
    author: "Geetanjali Shree",
    prop: "Paperback",
    price: "Rs. 312.00"
  }
];


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

const Book = (props) => {
  const { img, name, author, prop, price } = props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <p className='title'>{name}</p>
      <p className='author'>{author}</p>
      <p className='prop'>{prop}</p>
      <h6>{price}</h6>
    </article>
  )
} 

// ReactDom.render(< />, document.getElementById('root'));


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<BookList tab="home" />);