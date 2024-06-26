import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

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

   
    const cardStyle = {
      border: selected ? '4px solid red' : '3px solid black',
      marginBottom: '10px'
    };

    return (
      <Card style={cardStyle} onClick={this.handleClick}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + book.cover} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorum laborum, molestias temporibus pariatur libero atque fuga quod nihil impedit aliquid nisi est possimus magni omnis cumque, aut velit voluptas?
            Dolor, dolorem! Quos qui mollitia, quibusdam sequi aliquam facere eum, voluptatem expedita cupiditate fugit odio tempore atque distinctio. Rem, fugit exercitationem quos maxime veniam modi eaque nihil! Illo, culpa quasi?
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;