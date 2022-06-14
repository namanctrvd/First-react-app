import React from 'react'

const Book = (props) => {
    const { img, name, author, prop, price } = props;
    const clickHandler = () => alert("This is " + name);
    return (
        <article className='book' onMouseOver={() => {
            console.log(name)
        }}>
            <img src={img} alt="" />
            <p className='title'>{name}</p>
            <p className='author'>{author}</p>
            <p className='prop'>{prop}</p>
            <h6>{price}</h6>
            <button type='button' onClick={clickHandler}>Handling Events</button>
        </article>
    )
} 

export default Book