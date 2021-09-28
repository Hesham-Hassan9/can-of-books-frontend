import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Render extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "50%" }}>
          <Card.Body>
            <Card.Title>Weather info</Card.Title>
            <Card.Text>
              <p>Title: {this.props.title}</p>
              <p>Author: {this.props.author}</p>
              <p>Description: {this.props.description}</p>
              <p>Status: {this.props.status}</p>
              <p>Email: {this.props.email}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Render;
