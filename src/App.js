import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

class App extends Component {
  constructor(props) {
    super(props);

    // App state will store the current score and top score to render in NavBar
    // resultsDisplay will be passed into the NavBar and change on handleDisplayChange
    this.state = {
      score: 0,
      topScore: 0,
      resultsDisplay: 'Click on an image to begin!'
    };
  }

  // handleImageClick will be passed down to each ClickyImage in GameGrid to handle
  // what happens when the images are clicked. Expected behavior is that the ClickyImage
  // module will pass a boolean (true or false) representing whether or not the click was
  // successful or not (meaning the person clicked on an image that has not yet been clicked)
  handleImageClick = success => {
    if (success) {
      // If successful, add one point to score and change resultsDisplay
      this.setState({ score: this.state.score + 1 });
      this.handleDisplayChange(true);
    }
    else {
      // If unsuccessful, reset score and change resultsDisplay
      this.setState({ score: 0 });
      this.handleDisplayChange(false);
    }
  };

  // handleDisplayChange will change the message displayed to the user depending
  // on game state (successful click, unsuccessful click). Message for initial
  // state set in component constructor
  handleDisplayChange = success => {
    let onSuccess = 'You guessed correctly!';
    let onFailure = 'You guessed incorrectly...';
    if (success) {
      this.setState({ resultsDisplay: onSuccess });
    }
    else {
      this.handleTopScore(this.state.score);
      this.setState({ resultsDisplay: onFailure });
    }
  };

  // This method will update the current top score on reset if the
  // current score is greater than the current top score
  handleTopScore = score => {
    if (score > this.state.topScore) {
      this.setState({ topScore: score });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar resultsDisplay={this.state.resultsDisplay} score={this.state.score} topScore={this.state.topScore} />
        <GameGrid handleImageClick={this.handleImageClick} />
      </div>
    );
  }
}

export default App;
