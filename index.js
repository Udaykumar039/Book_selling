import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const books = [
  {
    id: 1,
    img:"https://m.media-amazon.com/images/I/81BgEsl0SJL._AC_UY327_FMwebp_QL65_.jpg",
    title:"Master Your Emotions",
    author:"Thibaut",
    price : "$5.75"
  },
  {
    id:2,
    img:"https://m.media-amazon.com/images/I/71vllLbpsdL._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Intelligent Investor",
    author:"B Graham",
    price:"$3.01"
  },
  {
    id:3,
    img:"https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Psychology of Money",
    author:"Morgan Housel",
    price:"$2.56"
  },
  {
    id:4,
    img:"https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg",
    title:"The Power of Subconscious Mind",
    author:"Joseph Murphy",
    price:"$1.35"
  },
  {
    id:5,
    img:"https://m.media-amazon.com/images/I/81QVKPEARXL._AC_UY327_FMwebp_QL65_.jpg",
    title:"To-Do List Formula",
    author:"Damon Zahariades",
    price:"$2.75"
  },
  {
    id:6,
    img:"https://m.media-amazon.com/images/I/71jW2qrp+SL._AC_UY327_QL65_.jpg",
    title:"Start With Why",
    author:"Simon",
    price:"$5.2"
  },
];

function List(){
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key = {book.id} {...book}></Book>
      })}

    </section>
  );
}
const Link = (a) => {
  console.log(a);
  window.alert("Your Order is Succesfully Placed.....")
}

const Book = ({img,title,author,price}) => {
  
  return(
    <article className='book'>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      
      <h3>{author}</h3>
     
      <h3>{price}</h3>
 
      <button className='btn' onClick={() => Link()}>Buy</button>
    </article>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<List/>);
