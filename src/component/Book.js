import React, { Component } from "react";
import Render from "./Render.js";

class Book extends Component {
  render() {
    return (
      <div>
        <Render showUpdatForm={this.props.showUpdatForm} deleteBookFun={this.props.deleteBookFun}
                    key={this.props.index} id={this.props.books_data._id} books_data={this.props.books_data} />
      </div>
    );
  }
}
export default Book;
