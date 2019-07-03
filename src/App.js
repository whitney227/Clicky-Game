import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import images from "../src/images.json";


class App extends Component {
  // set this.state.images to the images json array
  state ={
    images,
    score: 0,
    topScore:""
  };
  // create a method attached to the App clas
  shuffleImages(){
    const modifiedArray = this.state.images.sort((id) => Math.random(id) - 0.5);
    this.setState({
      images: modifiedArray
    })
  }

  // Map over this.state.images and render an ImgCard component for each image object
  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Wrapper>
          {this.state.images.map(image => (
            <ImgCard
              id={image.id}
              key={image.key}
              image={image.image}
              clicked={image.clicked}
              shuffleImages={(id) => this.shuffleImages(id)}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
