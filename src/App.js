import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AllBlogs } from "./Components/AllBlogs";
import { Blog } from "./Components/Blog";

class App extends Component {
  render() {
    return (
      <div className="flex">
        <Blog />
        <AllBlogs />
      </div>
    );
  }
}

export default App;
