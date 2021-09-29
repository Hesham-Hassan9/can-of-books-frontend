import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateFormModal extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.updateBook} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='title' placeholder="Enter Book Title" defaultValue={this.props.bookInfo.title} />
                        <Form.Control type="text" name='author' placeholder="Enter Auther Name" defaultValue={this.props.bookInfo.author} />
                        <Form.Control type="text" name='description' placeholder="Enter Book Description" defaultValue={this.props.bookInfo.description}/>
                        <Form.Control type="text" name='status' placeholder="Enter Your Status" defaultValue={this.props.bookInfo.status}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Update! ✔
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UpdateFormModal