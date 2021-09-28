import React, { Component } from "react";
import Render from "./Render.js";

class Book extends Component {
  render() {
    return (
      <div>
        <Render
          deleteBookFun={this.props.deleteBookFun}
          key={this.props.index}
          title={this.props.books_data.title}
          author={this.props.books_data.author}
          description={this.props.books_data.description}
          status={this.props.books_data.status}
          email={this.props.books_data.email}
          id={this.props.books_data._id}
        />
      </div>
    );
  }
}
export default Book;
