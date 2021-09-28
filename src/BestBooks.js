import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import axios from "axios";
import Book from "./component/Book.js";
import BookFormModal from "./component/BookFormModal.js";
import { withAuth0 } from "@auth0/auth0-react";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books_data: [],
    };
  }

  // get book fuction
  componentDidMount = async () => {
    let email = this.props.auth0.user.email;

    let book_url = `${process.env.REACT_APP_BACKEND_URL}/Book?email=${email}`;

    let getData = await axios.get(book_url);

    this.setState({
      books_data: getData.data,
    });
  };

  createBook = async (e) => {
    e.preventDefault();

    let bookFormInfo = {
      title1: e.target.title.value,
      author1: e.target.author.value,
      description1: e.target.description.value,
      status1: e.target.status.value,
      email1: this.props.auth0.user.email,
    };

    let createData = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/create-book`,
      bookFormInfo
    );

    this.setState({
      books_data: createData.data,
    });
  };

  deleDataBook = async (id) => {
    let email = this.props.auth0.user.email;

    let deleData = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/delete-book?id=${id}&email=${email}`
    );

    console.log(deleData);

    this.setState({
      books_data: deleData.data,
    });
  };

  // render
  render() {
    return (
      <div>
        <div>
          <h1>My Fav Books</h1>
          {this.state.books_data.map((data, ind) => {
            return <Book books_data={data} index={ind}  deleteBookFun={this.deleDataBook}/>;
          })}

          <br />
          <BookFormModal createBookFun={this.createBook} />
        </div>
      </div>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
