import React from 'react';
import Table from 'react-bootstrap/Table'

const Playground = () => {
 
  const books = [
    {
    Name: 'Harry Potter and the Order of Phoenix' , 
    //[`Price${(' ($) ')}`]: 10,
    Price: 10, 
    Year: '2000',
    Available: null // String(value) or .toString(value) https://www.samanthaming.com/tidbits/62-5-ways-to-convert-value-to-string/
    },

    {
    Name: 'Ulysses' , 
    Price: 12, 
    Year: '1960',
    Available: false 
    },

    {Name: 'Don Quixote' , 
    Price: 10, 
    Year: '1987',
    Available: false
    },

    {Name: 'War and Peace' , 
    Price: 25, 
    Year: '2009',
    Available: true
    },

    {Name: 'The Great Gatsby' , 
    Price: 15, 
    Year: '2005',
    Available: true,
    }
]

let i = 0;
books.map(book => {
  book['ID'] = i+1;
  i++
  Object.assign(book, ['ID']);
});




/*When not to use map()
Since map builds a new array, using it
when you aren't using the returned array is
an anti-pattern; use forEach or for...of instead.*/

  //forEach() method
  books.forEach((book) => {
    console.log(book.Name);
  })

  //Object.keys() method
    console.log(Object.keys(books[0]));

  //map() method
  const booksYears = books.map((book) => {
    return book.Year
  });

  console.log(booksYears)

  //filter() method
  //#1
  const filteredBooks = books.filter((book) => {
    return book.Year <= 2000 
  })
  
  console.log(filteredBooks);

  //#2
  const findAvailableBooks = books.filter((book) => {
    return book.Available === true
  });

  console.log(findAvailableBooks);


  //find()method - returns the first book that is found in the array
  const foundBooks = books.find((book) => {
    return book.Name === 'Ulysses'
  });

  console.log(foundBooks);

   //reduce()method - runs a function on every single element in the array
   //currentTotal - first argument is whatever first iteration of the array returned
   const total = books.reduce((currentTotal, book) => {
     return book.Price + currentTotal
   }, 0)

   console.log(total)

  return (
  
    <Table striped bordered hover variant="dark">
    <thead>
      <tr key={'header'}>
      {Object.keys(books[0]).map((key) => (
            <th>{key}</th>
          ))}
        </tr>
    </thead>

    <tbody>
  
      {books.map((book) => (
          <tr key={book.id}>
            {Object.values(book).map((value) => (
              <td>{String(value)}</td>
            ))}
          </tr>
        ))}
    </tbody>

  </Table>
   
  )
}

export default Playground

    