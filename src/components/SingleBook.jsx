import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }


  handleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

   
    const cardStyle = { width:"18rem",
      border: selected ? '4px solid red' : '3px solid black',
      marginBottom: '10px'
    };

    return (
      <Container>
  <Row className='justify-content-center'>
    <Col md="auto">
      <Card style={cardStyle} onClick={this.handleClick}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + book.cover} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum laborum, molestias temporibus pariatur libero atque fuga quod nihil impedit aliquid nisi est possimus magni omnis cumque, aut velit voluptas?
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
      
    );
  }
}

export default SingleBook;