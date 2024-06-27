import React from 'react';
import SingleBook from './SingleBook';
import fantasy from '../data/fantasy.json'
import {Container, Row} from 'react-bootstrap';

const BookList = () => {
    return (
        <Container>
        <Row>
          {fantasy.map((book) => (
            <SingleBook key={book.id} book={book} />
          ))}
        </Row>
      </Container>)}

export default BookList;