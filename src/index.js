import React from 'react';
import ReactDom from 'react-dom';

// CSS
import  './index.css';

const bookOne = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
  name: "The Psychology of Money",
  author: "Morgan Housel",
  prop: "Paperback",
  price: "Rs. 259.00"
}
const bookTwo = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg",
  name: "The power of your subconscious Mind",
  author: "Joseph Murphy",
  prop: "Paperback",
  price: "Rs. 115.00"
}
const bookThree = {
  img: "https://images-eu.ssl-images-amazon.com/images/I/61boBtfrz5L._AC_UL604_SR604,400_.jpg",
  name: "Ret Samadhi - Hindi",
  author: "Geetanjali Shree",
  prop: "Paperback",
  price: "Rs. 312.00"
}


function Books() {
  return (
    <section className='bookList'>
      <Book 
      img = {bookOne.img}
      name={bookOne.name}
      author={bookOne.author}
      prop={bookOne.author}
      price={bookOne.price}/>
      <Book
        img={bookTwo.img}
        name={bookTwo.name}
        author={bookTwo.author}
        prop={bookTwo.author}
        price={bookTwo.price} />
      <Book 
        img={bookThree.img}
        name={bookThree.name}
        author={bookThree.author}
        prop={bookThree.author}
        price={bookThree.price} />
    </section>
  )
}

const Book = ({img,name,author,prop,price}) => {
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p className='author'>{author}</p>
      <p className='prop'>{prop}</p>
      <h6>{price}</h6>
    </article>
  )
} 

ReactDom.render(<Books />, document.getElementById('root'));