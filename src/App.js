import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import images from "../src/images.json";


class App extends Component {
  // set this.state.images to the images json array
  state ={
    images: images,
    score: 0,
    topScore: 0,
    unselectedImages: images  
  };

  //Shuffle Array function
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
  };

  // reset state when image clicked
  handleButtonClick = event => {
    event.preventDefault();
    this.setState({
      score: 0,
      topScore: 0,
      allImages: images,
      unselectedImages: images
    });
  }
  // selectImage is called by onclick event in ImgCard
  selectImage = selectCharname => {
    const findCharacter = this.state.unselectedImages.find(char => char.charName === selectCharname);
    if (findCharacter === undefined) {
      this.setState({
        topScore : (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        allImages : images,
        unselectedImages: images
      });
    }
    else {
      const newUnselectedImages = this.state.unselectedImages.filter(char => char.charName !== selectCharname);

      this.setState({
        score: this.state.score +1,
        allImages: images,
        unselectedImages: newUnselectedImages
      });
    };
    this.shuffleArray(images);
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
              charName={image.charName}
              image={image.image}
              score = {this.state.score}
              selectImage = {this.selectImage}
              // clicked={image.clicked}
              // shuffleImages={(id) => this.shuffleImages(id)}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
