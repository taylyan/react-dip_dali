import React, { Component, useEffect, useState } from "react";

const UserHome = ({role}) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('https://react-dip-dali.onrender.com/book/booksUser')
    .then(res => {
      setBooks(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  } , [])
  
  return (
    <div className='book-list'>
      {
        books.map(book => {
          return <BookCard key={book.id} book = {book} role = {role}></BookCard>
        })
      }
      <iframe width="450" height="260" style="border: 1px solid #cccccc;" 
      src="https://thingspeak.com/channels/2295351/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line">

      </iframe>

    </div>   
  )
}

export default UserHome