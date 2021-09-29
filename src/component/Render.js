
import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class BookRender extends Component {

    deleteBookHandler = () => {
        this.props.deleteBookFun(this.props.id)
    }
    updateBookHandler = () => {
        this.props.showUpdatForm(this.props.books_data)
    }

    render() {
        return (
            <div key={this.props.idx}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Book Info</Card.Title>
                        <Card.Text>Title: {this.props.books_data.title}</Card.Text>
                        <Card.Text>Author: {this.props.books_data.author}</Card.Text>
                        <Card.Text>Description: {this.props.books_data.description}</Card.Text>
                        <Card.Text>Status: {this.props.books_data.status}</Card.Text>
                        <Card.Text>Email: {this.props.books_data.email}</Card.Text>
                        <Button onClick={this.deleteBookHandler}>
                            Delete 🗑️ 
                        </Button>
                        <Button onClick={this.updateBookHandler}>
                            Update! ✍️
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default BookRender