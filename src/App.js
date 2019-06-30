import React, {Component} from 'react';
//import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ImgCard from "./components/ImgCard";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import images from "../src/images.json";

class App extends Component {
  // set this.state.images to the images json array
  state ={
    images
  }

  // Map over this.state.images and render an ImgCard component for each image object
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
