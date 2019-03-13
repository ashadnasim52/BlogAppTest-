import React, { Component } from "react";
import socket from "../utility/socket";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export class AllBlogs extends Component {
  state = {
    // name: [],
    // email: [],
    // blog: []
    blogs: []
  };

  componentDidMount() {
    socket.on("AllBlogs", blogs => {
      // this.setState({ name: blogs.name });
      // this.setState({ email: blogs.email });
      // this.setState({ blog: blogs.blog });
      // this.setState({ blogs: blogs });
      console.log(blogs);
      this.setState({ blogs: blogs });
    });
  }
  render() {
    return (
      <ul>
        {this.state.blogs.map(blog => (
          <li>
            <h1>{blog.name}</h1>
            <p>{blog.blog}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default AllBlogs;
