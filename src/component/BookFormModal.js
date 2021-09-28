import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BookFormModal extends Component {
    render() {
        return (
            <>
                <br />
                <Form onSubmit={this.props.createBookFun}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='title' placeholder="Enter Book Title" />
                        <Form.Control type="text" name='author' placeholder="Enter Auther Name" />
                        <Form.Control type="text" name='description' placeholder="Enter Book Description" />
                        <Form.Control type="text" name='status' placeholder="Enter Your Status" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add your ❤ book
                    </Button>
                </Form>
                <br />
            </>
        )
    }
}

export default BookFormModal