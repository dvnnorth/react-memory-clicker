import React, { Component } from 'react';
import images from '../images.json';
import _ from 'lodash';
import update from 'immutability-helper';
import ClickyImage from './ClickyImage';

class GameGrid extends Component {
    constructor(props) {
        super(props);

        // Generate an array of ClickyImage components to be displayed and interacted with
        this.generateClickyImages = () => {
            // Using lodash map
            // handleImageClick will change display and update App score state
            // resetAll will generate a new array of ClickyImages and render them
            //      happens on unsuccessful click (image has already been clicked)
            let clickyImages = _.map(images, (image, i) => (
                <ClickyImage
                    key={i}
                    handleImageClick={props.handleImageClick}
                    resetAll={this.resetAll}
                    src={image.src}
                    alt={image.alt}
                />
            ));
            return clickyImages;
        };

        this.resetAll = () => {
            // Using https://github.com/kolodny/immutability-helper
            // Was having issues updating the state using various methods; 
            // this library solved my issues. 
            // Generate a new set  of <ClickyImage> components to be rendered
            let newState = update(this.state, {
                images: {
                    $set: [...this.generateClickyImages()]
                }
            });
            this.setState(newState);
        }
        
        // Store array collection of ClickyImages
        this.state = {
            images: this.generateClickyImages()
        }
    }

    // Render image grid
    render() {
        return (
            <div className="container">
                <div className="row p-3">
                    {_.shuffle(this.state.images)}
                </div>
            </div>
        );
    }
}

export default GameGrid;