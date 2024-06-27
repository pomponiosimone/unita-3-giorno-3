import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
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

   
    const cardStyle = { width:"17rem",
      border: selected ? '4px solid red' : '3px solid black',
      marginBottom: '5px'
    };

    return (
     
  
    <Col md={3}>
      <Card style={cardStyle} onClick={this.handleClick}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum laborum, molestias temporibus pariatur libero atque fuga quod nihil impedit aliquid nisi est possimus magni omnis cumque, aut velit voluptas?
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>


      
    );
  }
}

export default SingleBook;