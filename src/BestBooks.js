import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";

class MyFavoriteBooks extends React.Component {
  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    const bookData = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/books`,
      config
    );
    console.log(bookData);
    this.setState({ bookData: bookData.data });
  };
  render() {
    const { user } = this.props.auth0;
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <h3>This is a collection of {user.name} favorite books</h3>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
