import React, { Component } from 'react';

class ClickyImage extends Component {
    constructor(props) {
        super(props);

        // Store src and alt in state, set inital clicked state to false
        this.state = {
            src: props.src,
            alt: props.alt,
            clicked: false
        }

        // Set this.handleImageClick and this.resetAll to equal prop function for component use
        this.handleImageClick = props.handleImageClick;
        this.resetAll = props.resetAll;

    }

    // handleClick will be passed to core <img> tag onClick to handle what happens when
    // ClickyImage is clicked.
    handleClick = event => {
        // Check if the current image has been clicked by checking state
        if (this.state.clicked) {
            // If has been clicked, then the game is over, so
            // Run handleImageClick(false) (for unsuccessful) to set display and reset current score
            this.handleImageClick(false);
            // Run resetAll to trigger GameGrid destroying all ClickyImages and
            // creating/rendering new ones
            this.resetAll();
        }
        else {
            // If this hasn't been clicked, then player has scored, so
            // Set this.state.clicked to true because this has been clicked
            this.setState({ clicked: true });
            // Runh andleImageClick(true) (for successful) to set display and increment current score
            this.handleImageClick(true);
        }
    };

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 clicky">
                <img className="w-75 mx-4"
                    src={this.state.src}
                    alt={this.state.alt}
                    onClick={this.handleClick} />
            </div>
        );
    }
}

export default ClickyImage;