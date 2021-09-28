import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import axios from "axios";
import Book from "./component/Book.js";
import { withAuth0 } from "@auth0/auth0-react";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayOfbook: [],
      searchQuery: "",
    };
  }

  componentDidMount = async () => {
    let email = this.props.auth0.user.email;

    let bookUrl = `http://localhost:3001/getBook?email=${email}`;
    let bookData = await axios.get(bookUrl);
    console.log("hi");
    console.log(bookData);
    this.setState({
      ArrayOfbook: bookData.data,
    });
  };

  render() {
    return (
      <div>
        <h1>My Fav Books</h1>
        {this.state.ArrayOfbook.map((data, ind) => {
          return <Book ArrayOfbook={data} index={ind} />;
        })}
      </div>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
