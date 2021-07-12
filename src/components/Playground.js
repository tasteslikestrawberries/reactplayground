import React from 'react';
import Table from 'react-bootstrap/Table'

const Playground = () => {

  const books = [
    {
    Name: 'Harry Potter and the Order of Phoenix' , 
    [`Price${(' ($) ')}`]: 10, 
    Year: '2000'},

    {Name: 'Ulysses' , 
    Price: 12, 
    Year: '1960'},

    {Name: 'Don Quixote' , 
    Price: 10, 
    Year: '2000'},

    {Name: 'War and Peace' , 
    Price: 25, 
    Year: '2009'},

    {Name: 'The Great Gatsby' , 
    Price: 15, 
    Year: '2005',
    }
]

let i = 0;
books.map(book => {
  book['ID'] = i+1;
  i++;
});

  //filter() method
  const filteredBooks = books.filter((book) => {
    return book.Price <= 20 //The less than or equal operator (<=) returns true if the left operand is less than or equal to the right operand, and false otherwise.
  })

    console.log(filteredBooks);

  //


  
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
  
      {books.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
    </tbody>

  </Table>
   
  )
}

export default Playground

    