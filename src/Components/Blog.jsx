import React, { Component } from "react";
import socket from "../utility/socket";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export class Blog extends Component {
  state = {
    name: "",
    email: "",
    blog: ""
  };
  submitBlog = () => {
    socket.emit("SendingOneBlog", this.state);
  };

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="name">Name</Label>
          <Col>
            <Input
              id="name"
              onChange={env => {
                this.setState({ name: env.target.value });
              }}
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email">Email</Label>
          <Col>
            <Input
              type="email"
              id="email"
              onChange={env => {
                this.setState({ email: env.target.value });
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Content">Content</Label>
          <Col>
            <Input
              type="textarea"
              id="Content"
              onChange={env => {
                this.setState({ blog: env.target.value });
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row check>
          <Col>
            <Button onClick={this.submitBlog}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Blog;
