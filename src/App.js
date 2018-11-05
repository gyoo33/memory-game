import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./allImages.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0,
    images
  };

  shuffleImgArray = images => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  }

  correctGuess = newImgs => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    this.setState({
      images: this.shuffleImgArray(newImgs),
      score: newScore,
      topScore: newTopScore
    })
  }

  wrongGuess = images => {
    this.setState({
      images: this.resetData(images),
      score: 0
    });
  };

  resetData = images => {
    const resetData = images.map(item => ({ ...item, clicked: false }));
    return this.shuffleImgArray(resetData);
  };

  cardClicked = id => {
    let guessedCorrectly = false;
    const newImgs = this.state.images.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.correctGuess(newImgs)
      : this.wrongGuess(newImgs);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Container>
          {this.state.images.map(item => (
            <Card
              key={item.id}
              id={item.id}
              cardClicked={this.cardClicked}
              image={item.image}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;

