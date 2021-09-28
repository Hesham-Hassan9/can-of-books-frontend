import React, { Component } from "react";
import Render from "./Render.js";

class Book extends Component {
  render() {
    return (
      <div>
        <Render
          key={this.props.index}
          title={this.props.ArrayOfbook.title}
          author={this.props.ArrayOfbook.author}
          description={this.props.ArrayOfbook.description}
          status={this.props.ArrayOfbook.status}
          email={this.props.ArrayOfbook.email}
        />
      </div>
    );
  }
}
export default Book;
